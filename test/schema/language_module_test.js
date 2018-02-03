const assert = require('assert');
const User = require('../../models/user');

const { userData } = require('../data');

describe('User Schema', () => {
  let user;

  beforeEach( async () => {
    user = new User(userData);
    await user.save();
  })

  it('contains a language module', async () => {

  })
})
