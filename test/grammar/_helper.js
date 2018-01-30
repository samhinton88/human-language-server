const { ConjugationHelper } = require('../../helpers/grammar');
const assert = require('assert');

exports.assertConjugation = function(dataObject) {
  const { expect, infinitive, instruction } = dataObject;
  const result = new ConjugationHelper(infinitive, instruction).call();

  assert(expect === result);
}
