//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {
  constructor() {
    this.stack = [];
    this.dictionary = {};
  }

  evaluate(input) {
    const words = input.trim().toUpperCase().split(/\s+/);
    for (const word of words) {
      if (this.isNumber(word)) {
        this.stack.push(parseInt(word));
      } else if (this.dictionary[word]) {
        this.dictionary[word]();
      } else {
        throw new Error(`Unknown word: ${word}`);
      }
    }
  }

get stack() {
    return [...this.stack];
}
  }

  isNumber(word) {
    return /^\d+$/.test(word);
  }
}
