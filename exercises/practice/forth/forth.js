//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {
export class Forth {
  constructor() {
    this.stack = [];
    this.words = {};
  }

  evaluate(input) {
    const tokens = input.toUpperCase().split(" ");
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (this.words.hasOwnProperty(token)) {
        this.words[token].call(this);
      } else if (this.isNumber(token)) {
        this.stack.push(Number(token));
      } else if (token === ":") {
        const wordName = tokens[++i];
        const definition = [];
        while (tokens[++i] !== ";") {
          definition.push(tokens[i]);
        }
        this.words[wordName] = () => this.evaluate(definition.join(" "));
      } else {
        throw new Error("Unknown word");
      }
    }
  }

  isNumber(token) {
    return /^\d+$/.test(token);
  }

  get stack() {
    return this.stack;
  }
}
    this.words = {};
  }

  evaluate(input) {
    const tokens = input.toUpperCase().split(" ");
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (this.words.hasOwnProperty(token)) {
        this.words[token].call(this);
      } else if (this.isNumber(token)) {
        this.stack.push(Number(token));
      } else if (token === ":") {
        const wordName = tokens[++i];
        const definition = [];
        while (tokens[++i] !== ";") {
          definition.push(tokens[i]);
        }
        this.words[wordName] = () => this.evaluate(definition.join(" "));
      } else {
        throw new Error("Unknown word");
      }
    }
  }

  isNumber(token) {
    return /^\d+$/.test(token);
  }

  get stack() {
    return this.stack;
  get stack() {
    return this.stack;
  }
}
  get stack() {
    return this.stack;
  }

  evaluate() {
    throw Error('Remove this statement and implement this function');
  }
    throw Error('Remove this statement and implement this function');
  }

  get stack() {
    throw Error('Remove this statement and implement this function');
  }
}
