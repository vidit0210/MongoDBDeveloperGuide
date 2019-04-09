const assert = require('assert');
const User = require('../src/user');

describe(('Update test'), () => {
    let user_name;
    beforeEach((done) => {
        user_name = new User({
            name: 'rahul'
        })
        user_name.save().then(() => {
            done()
        })
    })


    it('Model Class and Update', (done) => {
        User.update({
            name: 'rahul'
        }, {
            name: 'Vidit'
        }).then(() => done())
    })
    it('Model Class and FindOneUpdate', (done) => {
        User.findOneAndUpdate({
            name: 'rahul'
        }, {
            name: 'yolo'
        }).then(() => done())
    })

    it('Model Class and FindOneAndUpdateByID', (done) => {
        User.findByIdAndUpdate
    })
})