const assert = require('assert');
const User = require('../../../models/user');
const { email, password } = require('../../data').userData;

describe('User Read', () => {
  let user;

  beforeEach( async() => {
    user = new User({ email, password });
    await user.save()
  })

  it('reads an email address', async() => {
    const returnedUser = await User.findOne({ email }).exec();
    assert(returnedUser.email === email);
  })

  it('reads a native language', async() => {
    const returnedUser = await User.findOne({ email }).exec();
    assert(returnedUser.settings.nativeLanguage === 'english');
  })

  it('reads a spanish language module', async() => {
    const returnedUser = await User.findOne({ email }).exec();
    assert(returnedUser.languageModules[0].languageName === 'spanish');
  })
})
