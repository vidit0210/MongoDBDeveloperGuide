const assert = require('assert')
const User = require('../src/user')

describe('Removing using 4 methods', () => {
    let user_name;
    beforeEach((done) => {
        user_name = new User({
            name: 'Rahul'
        })
        user_name.save().then(() => {
            done()
        })
    })

    it(' Removing by the Instance ', (done) => {
        user_name.remove().then(() => User.findOne({
            name: 'Rahul'
        })).then((user) => {
            assert(user === null)
            done()
        })
    })

    it('Removing by the Class Value ', (done) => {
        User.deleteOne({
            name: 'Rahul'
        }).then(() => User.findOne({
            name: 'Rahul'
        })).then((user) => {
            assert(user === null)
            done()
        })
    })

    it('Removing Multiple Values using class instances', (done) => {
        User.deleteMany({
            name: 'Rahul'
        }).then(() =>
            User.findOne({
                name: 'Rahul'
            })
        ).then((user) => {
            assert(user === null)
            done()
        })
    })

})