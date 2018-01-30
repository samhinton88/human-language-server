const assert = require('assert');
const { assertConjugation } = require('./_helper')
const {
  verbs: {
    testVerbs: [nadar, comer]
  }
} = require('../data');


describe('Regular Verbs', () => {
  let helper;

  it("conjugates nadar in the second person singular indicative", () => {
    assertConjugation(nadar);
  });

  it("conjugates comer in the first person singular indicative", () => {
    assertConjugation(comer);
  })
})


// module.exports = {
//   testVerbs: {
//     nadar: {
//       infinitive: 'nadar',
//       instructions: {
//         person: '2',
//         count: 'sng',
//         mood: 'present'
//       },
//       expect: 'nadas'
//     }
//   }
// }

