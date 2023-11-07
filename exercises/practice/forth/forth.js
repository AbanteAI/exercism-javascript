//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {
  constructor() {
    this._stack = [];
    this.definitions = {};
  }
  }

  evaluate(input) {
    const commands = input.toLowerCase().split(' ').filter(cmd => cmd.length > 0);
    for (let cmd of commands) {
      if (!isNaN(parseInt(cmd))) {
    this._stack.push(parseInt(cmd));
  }
  }

  get stack() {
    return this._stack;
  }
}
  add() {
    const a = this._stack.pop();
    const b = this._stack.pop();
    this._stack.push(b + a);
  }

  subtract() {
    if (this.stack.length < 2) throw new Error('Stack underflow');
    const a = this._stack.pop();
    const b = this._stack.pop();
    this._stack.push(b - a);
  }

  multiply() {
    if (this.stack.length < 2) throw new Error('Stack underflow');
    const a = this._stack.pop();
    const b = this._stack.pop();
    this._stack.push(b * a);
  }

  divide() {
    if (this.stack.length < 2) throw new Error('Stack underflow');
    const a = this._stack.pop();
    const b = this._stack.pop();
    if (a === 0) throw new Error('Division by zero');
    this._stack.push(Math.floor(b / a));
  }

  dup() {
    if (this.stack.length < 1) throw new Error('Stack underflow');
    const a = this._stack[this._stack.length - 1];
    this._stack.push(a);
  }

  drop() {
    if (this.stack.length < 1) throw new Error('Stack underflow');
    this._stack.pop();
  }

  swap() {
    if (this.stack.length < 2) throw new Error('Stack underflow');
    const a = this._stack.pop();
    const b = this._stack.pop();
    this._stack.push(a);
    this._stack.push(b);
  }

  over() {
    if (this.stack.length < 2) throw new Error('Stack underflow');
    const a = this._stack[this._stack.length - 2];
    this._stack.push(a);
  }
