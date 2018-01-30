const endings = require('./endings');
// console.log(endings)
// endings['ar']['ind']['pres']['2']['sng'] = 'as';

class ConjugationHelper {
  constructor(infinitive, instruction) {
    this.infinitive = infinitive;
    this.instruction = instruction;
    this.verbType = this.getVerbType(infinitive);
  }

  call() {
    const ending = this.retrieveEnding();

    return this.addEnding(ending);
  }

  retrieveEnding() {
    const { person, tense, count, mood } = this.instruction;

    return endings[this.verbType][mood][tense][person][count];
  }

  addEnding(ending) {
    return `${this.infinitive.slice(0,-2)}${ending}`
  }

  getVerbType(infinitive) {
    const char = infinitive.charAt(infinitive.length-2);
    const types = {a: 'ar', e: 'er', i: 'ir'};

    return types[char];
  }
}

module.exports = ConjugationHelper;
