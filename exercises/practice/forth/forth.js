//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {
  constructor() {
    this.stack = [];
    this.words = {
      '+': () => {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(a + b);
      },
      '-': () => {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(a - b);
      },
      '*': () => {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(a * b);
      },
      '/': () => {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(Math.floor(a / b));
      },
      'DUP': () => {
        const a = this.stack.pop();
        this.stack.push(a, a);
      },
      'DROP': () => {
        this.stack.pop();
      },
      'SWAP': () => {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(b, a);
      },
      'OVER': () => {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(a, b, a);
      },
    };
  }

  evaluate(input) {
    const tokens = input.toUpperCase().split(/\s+/);
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (token === ':') {
        const word = tokens[++i];
        const definition = [];
        while (tokens[++i] !== ';') {
          definition.push(tokens[i]);
        }
        this.words[word] = () => {
          this.evaluate(definition.join(' '));
        };
      } else if (this.words[token]) {
        this.words[token]();
      } else if (/^-?\d+$/.test(token)) {
        this.stack.push(parseInt(token, 10));
      } else {
        throw new Error(`Unknown command ${token}`);
      }
    }
  }

  get stack() {
    return this.stack.slice();
  }
}
