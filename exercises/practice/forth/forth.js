//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {
  constructor() {
    this.stack = [];
    this.dictionary = {};
  }
  }

  evaluate(input) {
    const words = input.split(" ");
    for (const word of words) {
      if (this.dictionary[word]) {
        this.dictionary[word](this.stack);
      } else if (/^-?\d+$/.test(word)) {
        this.stack.push(Number(word));
      } else {
        throw new Error(`Invalid word: ${word}`);
      }
    }
  }

  get stack() {
    return [...this.stack];
  }
}
