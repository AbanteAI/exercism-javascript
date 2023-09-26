//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  constructor() {
    this.stack = [];
    this.words = {};
  }
  }

  evaluate(input) {
    const tokens = input.toUpperCase().split(/\s+/);
    for (const token of tokens) {
      if (token.match(/^-?\d+$/)) {
        this.stack.push(parseInt(token));
      } else if (token in this.words) {
        this.words[token]();
      } else if (token === "+") {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(a + b);
      } else if (token === "-") {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(a - b);
      } else if (token === "*") {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(a * b);
      } else if (token === "/") {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(Math.floor(a / b));
      } else if (token === "DUP") {
        const a = this.stack.pop();
        this.stack.push(a, a);
      } else if (token === "DROP") {
        this.stack.pop();
      } else if (token === "SWAP") {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(b, a);
      } else if (token === "OVER") {
        const b = this.stack.pop();
        const a = this.stack.pop();
        this.stack.push(a, b, a);
      } else if (token === ":") {
        const wordName = tokens.shift();
        const wordDefinition = [];
        let nextToken;
        while ((nextToken = tokens.shift()) !== ";") {
          wordDefinition.push(nextToken);
        }
        this.words[wordName] = () => this.evaluate(wordDefinition.join(" "));
      } else {
        throw new Error(`Invalid token: ${token}`);
      }
    }
  }

  get stack() {
    return this.stack;
  }
}
