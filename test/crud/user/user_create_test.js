const assert = require('assert');
const User = require('../../../models/user');

describe('User Creation', () => {
  let user;

  beforeEach( async () => {
    user = new User({
      email: 'email@email.com',
      password: 'password'
    })
    await user.save();
  })

  it('saves a user', () => {
    assert(!user.isNew);
  })
})
