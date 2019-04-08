const assert = require('assert');
const User = require('../src/user');

describe('Creates a User', () => {
    it('saves a User', () => {
        const Joe = new User({
            name: 'Joe'
        })
        Joe.save().then(() => {
            assert(!Joe.isNew);
            done();
        })
    })
})