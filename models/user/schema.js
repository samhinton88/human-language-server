const Schema = require('mongoose').Schema;



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
    required: [true, 'User password is required']
  }
})
