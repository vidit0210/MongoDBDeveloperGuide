const assert = require('assert');
const User = require('../src/user');

describe('Reading from the Database', () => {
    let user_name
    beforeEach((done) => {
        user_name = new User({
            name: 'Vidit'
        });
        user_name.save().then(() => {
            done();
        })
    })
    it('Find all the entries with the name Vidit', (done) => {
        User.find({
            name: 'Vidit'
        }).then((users) => {
            assert(users[0]._id.toString() === user_name._id.toString())
            done();
        })
    })
    it('Finds a Single Entry with name Vidit', (done) => {
        User.findOne({
            name: 'Vidit'
        }).then((user) => {
            assert(user._id.toString() === user_name._id.toString())
            done()
        })
    })

    it('Find a user by a Particular id', (done) => {
        User.findOne({
            _id: user_name._id
        }).then((user) => {
            assert(user.name === 'Vidit')
            done()
        })
    })
})