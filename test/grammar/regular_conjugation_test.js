const assert = require('assert');
const { ConjugationHelper } = require('../../helpers/grammar')
const {
  arVerb: {
    testVerbs: { nadar }
  }
} = require('../data');

describe('Regular Verbs', () => {
  let helper;

  it("conjugates nadar in the second person singular indicative", () => {
    const { instruction, infinitive, expect } = nadar;
    const result = new ConjugationHelper(infinitive, instruction).call()
    assert(expect === result);
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

