const assert = require('assert');
const User = require('../../../models/user');
const { password, email, badPassword } = require('../../data').userData;



describe('User Creation', () => {
  let user;

  beforeEach( async () => {
    user = new User({
      email,
      password
    })
    await user.save();
  })

  it('saves a user', () => {
    assert(!user.isNew);
  })
})
