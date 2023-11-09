//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {
  constructor() {
    this.stack = [];
  }

  evaluate() {
    input => {
      const words = input.toUpperCase().split(/\s+/);
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (!isNaN(parseInt(word))) {
          this.stack.push(parseInt(word));
        } else {
          this.executeWord(word);
        }
      }
    }
  }

  get stack() {
    return this.stack.slice();
  }
}
};
  executeWord(word) {
    switch (word) {
      case '+':
        this.add();
        break;
      case '-':
        this.subtract();
        break;
      case '*':
        this.multiply();
        break;
      case '/':
        this.divide();
        break;
      case 'DUP':
        this.dup();
        break;
      case 'DROP':
        this.drop();
        break;
      case 'SWAP':
        this.swap();
        break;
      case 'OVER':
        this.over();
        break;
      default:
        throw Error('Unknown word');
    }
  }

  add() {
    this.checkStack(2);
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(a + b);
  }

  subtract() {
    this.checkStack(2);
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(b - a);
  }

  multiply() {
    this.checkStack(2);
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(a * b);
  }

  divide() {
    this.checkStack(2);
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(Math.floor(b / a));
  }

  dup() {
    this.checkStack(1);
    this.stack.push(this.stack[this.stack.length - 1]);
  }

  drop() {
    this.checkStack(1);
    this.stack.pop();
  }

  swap() {
    this.checkStack(2);
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(a);
    this.stack.push(b);
  }

  over() {
    this.checkStack(2);
    const a = this.stack[this.stack.length - 2];
    this.stack.push(a);
  }

  checkStack(n) {
    if (this.stack.length < n) {
      throw Error('Stack underflow');
    }
  }
