const mongoose = require('mongoose');
const {
  Schema
} = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    require: [true, 'Name is Required']
  },
  postCount: Number
})

const User = mongoose.model('user', UserSchema);

module.exports = User;