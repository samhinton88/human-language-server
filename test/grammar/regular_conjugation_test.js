const assert = require('assert');
const { assertConjugation } = require('./_helper')
const {
  regularVerbs: {
    testVerbs: [nadar, comer, vivir]
  }
} = require('../data');


describe('Regular Verbs', () => {
  let helper;

  it("conjugates nadar in the second person singular indicative", () => {
    assertConjugation(nadar);
  });

  it("conjugates comer in the first person singular indicative", () => {
    assertConjugation(comer);
  });

  it("conjugates vivir in the first person singular indicative", () => {
    assertConjugation(vivir);
  });
})

