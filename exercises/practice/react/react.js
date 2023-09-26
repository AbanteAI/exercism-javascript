//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  addCallback(cb) {
    this.callbacks.add(cb);
  }

  removeCallback(cb) {
    this.callbacks.delete(cb);
  }
    this.value = value;
    this.callbacks = new Set();
  }

  setValue(value) {
    if (this.value !== value) {
      this.value = value;
      this.callbacks.forEach((cb) => cb());
    }
  }
  }

  setValue(value) {
    throw new Error('Remove this statement and implement this function');
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.fn = fn;
    this.value = this.computeValue();
    this.callbacks = new Set();
    this.inputCells.forEach((cell) => cell.addCallback(() => this.updateValue()));
  }

  addCallback(cb) {
    this.callbacks.add(cb);
  }

  removeCallback(cb) {
    this.callbacks.delete(cb);
  }

  updateValue() {
    const newValue = this.computeValue();
    if (this.value !== newValue) {
      this.value = newValue;
      this.callbacks.forEach((cb) => cb());
    }
  }

  computeValue() {
    return this.fn(this.inputCells);
  }
  }

  addCallback(cb) {
  addCallback(cb) {
    this.callbacks.add(cb);
  }

  removeCallback(cb) {
    this.callbacks.delete(cb);
  }
  }

    throw new Error('Remove this statement and implement this function');
  }
}

export class CallbackCell {
  constructor(fn) {
  addCallback(cb) {
    this.callbacks.add(cb);
  }

  removeCallback(cb) {
    this.callbacks.delete(cb);
  }
    this.value = this.computeValue();
    this.callbacks = new Set();
  }
  }

  }

  computeValue() {
    return this.fn();
  }
  }
}
