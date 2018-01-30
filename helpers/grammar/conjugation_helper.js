const endings = {}

class ConjugationHelper {
  constructor(infinitive, instruction) {
    this.infinitive = infinitive;
    this.instruction = instruction;
  }

  call() {
    const ending = this.retrieveEnding();
    return this.addEnding(ending);
  }

  retrieveEnding() {
    const { person, tense, count, mood } = this.instruction;

    return endings[mood][tense][person][count];
  }

  addEnding(ending) {
    return `${this.infinitive.slice(0,-2)}${ending}`

  }
}

module.exports = ConjugationHelper;
