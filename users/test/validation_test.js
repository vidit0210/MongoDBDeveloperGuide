const assert = require('assert');
const User = require('../src/user');

describe('Validation', () => {
    it('User has name', () => {
        const user = new User({
            name: undefined
        });
        const validateResult = user.validateSync();
        const message = validateResult.errors.name.message;
        console.log(message)
    })
})