const Schema = require('mongoose').Schema;



module.exports = new Schema({
  email: {
    type: String,
    required: [true, 'User email is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'User password is required']
  }
})
