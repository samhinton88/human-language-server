const assert = require('assert');
const { ConjugationHelper } = require('../../helpers/grammar')
const {
  verbs: {
    testVerbs: [nadar, comer]
  }
} = require('../data');

console.log('nadar is', nadar)
console.log('comer is', comer)

describe('Regular Verbs', () => {
  let helper;

  it("conjugates nadar in the second person singular indicative", () => {
    const { instruction, infinitive, expect } = nadar;
    const result = new ConjugationHelper(infinitive, instruction).call()
    assert(expect === result);
  });

  it("conjugates comer in the first person singular indicative", () => {
    const { instruction, infinitive, expect } = comer;
    const result = new ConjugationHelper(infinitive, instruction).call();
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

