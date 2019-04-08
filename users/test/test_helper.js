const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user_test', {
    useNewUrlParser: true
})

//Before Runs Only Once SPecifying the before runningthe Project
before((done) => {
    mongoose.connection.once('open', () => {
        // console.log('Connection Succesful')
        done();
    }).on('error', (error) => {
        console.log("Error", error);
    })

})