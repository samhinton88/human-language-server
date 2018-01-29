const assert = require('assert');
const User = require('../../../models/user');

describe('User Creation', () => {
  let user;

  beforeEach( async () => {
    user = await new User({
      email: 'email@email.com',
      password: 'password'
    })
    .save();
  })

  it('saves a user', () => {
    assert(!user.isNew);
  })
})
