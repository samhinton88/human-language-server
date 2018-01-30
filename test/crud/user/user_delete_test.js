const assert = require('assert');
const User = require('../../../models/user');
const { email, password } = require('../../data').userData;
console.log(email)

describe('User Delete', () => {
  let user;

  it('deletes a user', async () => {
    user = new User({ email, password })
    await user.save();
    await user.remove();
    const users = await User.find({});
    assert(users.length === 0);
  })
})
