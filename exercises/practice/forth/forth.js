//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {
  constructor() {
    this.stack = [];
    this.words = {};
  }

  evaluate(input) {
    input.split(' ').forEach(token => {
      if (parseInt(token)) {
        this.stack.push(parseInt(token));
      } else {
        let word = token.toUpperCase();
        if (this.words[word]) {
          this.words[word]();
        } else {
          throw Error(`Unknown word: ${word}`);
        }
      }
    });
  }

  get stack() {
    return this.stack.slice();
  }
