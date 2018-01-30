module.exports = {
  types: ['ar', 'er', 'ir'],
  moods: ['ind', 'sub'],
  persons: [1, 2, 3],
  counts: ['sng', 'pl'],
  ar: {
    ind: {
      pres: { 1: {sng: 'o', pl: 'amos'}, 2: {sng: 'as', pl: 'ais'}, 3: {sng: 'a', pl: 'an'} },
      pret: { 1: {sng: '', pl: ''}, 2: {sng: '', pl: ''}, 3: {sng: '', pl: ''} },
      imp: { 1: {sng: '', pl: ''}, 2: {sng: '', pl: ''}, 3: {sng: '', pl: ''} },
      cond: { 1: {sng: '', pl: ''}, 2: {sng: '', pl: ''}, 3: {sng: '', pl: ''} },
      fut: { 1: {sng: '', pl: ''}, 2: {sng: '', pl: ''}, 3: {sng: '', pl: ''} },
    }
  },
  er: {
    ind: {
      pres: { 1: {sng: 'o'}, 2: {sng: 'es'} }
    }
  },
  ir: {
    ind: {
      pres: { 1: {sng: 'o'}, 2: {sng: 'es'} }
    }

  }
}

// { 1: {sng: '', pl: ''}, 2: {sng: '', pl: ''}, 3: {sng: '', pl: ''} }
