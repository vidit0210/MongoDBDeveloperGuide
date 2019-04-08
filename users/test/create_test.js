const assert = require('assert');
const mongoose = require('mongoose')
const User = require('../src/user')

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        //Delete the entry
        done()
    })
})

describe('Creating an Entry', () => {
    it('User name Entry', (done) => {
        const user_name = new User({
            name: 'Vidit'
        })
        user_name.save().then(() => {
            assert(!user_name.isNew) //After saving user_name using isNew Joe Value will turn into Fasle  -- using !operatior we use truthy Values
            done()

        })
    })

})