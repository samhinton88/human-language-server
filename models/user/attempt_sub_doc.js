const Schema = require('mongoose').Schema;

module.exports = new Schema({
  target: String,
  wordType: String,
  timeStamp: Date,
  content: String,
  instruction: {

  }
})
