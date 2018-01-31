const assert = require('assert');
const User = require('../../../models/user');

const { badEmail, badPassword, email, password } = require('../../data').userData;

describe("User Validation", () => {
  it('rejects user creation with a bad email', async () => {
    try {
      const user = new User({ email: badEmail, password: password })
      await user.save();
      assert(false)
    } catch (err) {
      assert(err.errors.email)
    };
  });

  it('rejects user creation with a weak password', async () => {
    const user = new User({ email, password: badPassword });
    try {
      await user.save();
      assert(false)
    } catch (err) {
      assert(err.errors.password)
    }
  })
});
