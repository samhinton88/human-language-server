const mongoose = require('mongoose');

const Schema = mongoose.Schema;

languageModuleSchema = new Schema({
  languageName: { type: String, default: 'spanish'},
  neverStudied: { type: Boolean, default: true }
})

module.exports = languageModuleSchema;
