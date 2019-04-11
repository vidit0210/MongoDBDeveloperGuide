const assert = require('assert');
const User = require('../src/user');

describe(('Update test'), () => {
    let user_name;
    beforeEach((done) => {
        user_name = new User({
            name: 'rahul',
            postCount: 1
        })
        user_name.save().then(() => {
            done()
        })
    })


    it('Model Class and Update', (done) => {
        User.updateOne({
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

    // it('Model Class and FindOneAndUpdateByID', (done) => {
    //     User.findByIdAndUpdate({

    //     })
    // })

    it('A user can have their Post count updated by 1', (done) => {
        User.updateOne({
            name: 'rahul'
        }, {
            $inc: {
                postCount: 1
            }
        }).then(() => User.findOne({
            name: 'rahul'
        })).then((user) => {
            assert(user.postCount === 2)
            done()
        })
    })
})