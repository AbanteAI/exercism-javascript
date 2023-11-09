//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  constructor(value) {
    this.value = value;
  }

  setValue(value) {
    this.value = value;
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.fn = fn;
    this.callbacks = [];
  }

  addCallback(cb) {
    this.callbacks.push(cb);
  }

  removeCallback(cb) {
    this.callbacks = this.callbacks.filter(callback => callback !== cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
  }
}
