const assert = require('assert');
const User = require('../../../models/user');

const { badEmail, badPassword, email, password } = require('../../data').userData;

describe("User Validation", () => {
  it('rejects user creation with a bad email', async () => {

    try {
      const user = new User({ email: badEmail, password: password })
      await user.save().exec();
      assert(false)
    } catch (err) {
      assert(err)
    };
  });

  it('rejects user creation with a weak password', async () => {

    try {
    const user = new User({ email, password: badPassword });
      await user.save();
      assert(false)
    } catch (err) {
      assert.ok(err.errors.password)
    }
  })
});
