//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  constructor(value) {
    this.value = value;
    this.callbacks = [];
  }

  setValue(value) {
    if (this.value !== value) {
      this.value = value;
      this.callbacks.forEach(cb => cb());
    }
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.fn = fn;
    this.value = this.computeValue();
    this.callbacks = [];
    this.inputCells.forEach(cell => cell.addCallback(() => this.updateValue()));
  }

  addCallback(cb) {
    this.callbacks.push(cb);
  }

  removeCallback(cb) {
    const index = this.callbacks.indexOf(cb);
    if (index !== -1) {
      this.callbacks.splice(index, 1);
    }
  }

  computeValue() {
    return this.fn(this.inputCells.map(cell => cell.value));
  }

  updateValue() {
    const newValue = this.computeValue();
    if (this.value !== newValue) {
      this.value = newValue;
      this.callbacks.forEach(cb => cb());
    }
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.value = this.fn();
    this.callbacks = [];
  }
}
}
