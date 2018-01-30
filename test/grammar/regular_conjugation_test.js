const assert = require('assert');
const { ConjugationHelper } = require('../../helpers/grammar')
const { arVerb } = require('../data');
console.log(arVerb.ar)

describe('Regular Verbs', () => {
  let helper;

  it(`conjugates ${arVerb}`, () => {
    helper = new ConjugationHelper()
  })
})


// module.exports = {
//   ar: {
//     nadar: {
//       infinitive: 'nadar',
//       grammar: {
//         person: '2',
//         count: 'sng',
//         mood: 'present'
//       },
//       conjugation: 'nadas'
//     }
//   }
// }
