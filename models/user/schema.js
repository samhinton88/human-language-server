const Schema = require('mongoose').Schema;
const languageModuleSchema = require('./language_module_sub_doc');



module.exports = new Schema({
  email: {
    type: String,
    required: [true, 'User email is required'],
    unique: true,
    validate:  {
      validator: function(v) {
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(v);
      },
      message: 'Not a valid email'
    },
  },
  password: {
    type: String,
    required: [true, 'User password is required'],
    validate: {
      validator: function(v) {
        return /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/g.test(v);
      },
      message: 'Password is not strong enough'
    }
  },
  settings: {
    nativeLanguage: { type: String, default: 'english' },
  },
  languageModules: [languageModuleSchema]
})
