
const mongoose = require('mongoose');

// mongoose promise is deprecated, use ES6 Promise
mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/human_language_test');
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', () => (error) => {
      console.warn('Warning', error);
    });
})

beforeEach(  (done) => {
  const { users } = mongoose.connection.collections;
  users.drop(() => done());
})
