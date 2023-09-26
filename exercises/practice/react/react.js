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

  setValue(value) {
    throw new Error('Remove this statement and implement this function');
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.fn = fn;
    this.value = this.computeValue();
    this.callbacks = [];
    this.inputCells.forEach(cell => cell.addCallback(() => this.value = this.computeValue()));
  }

  addCallback(cb) {
    this.callbacks.push(cb);
  }

  removeCallback(cb) {
    const index = this.callbacks.indexOf(cb);
    if (index > -1) {
      this.callbacks.splice(index, 1);
    }
  }

  computeValue() {
    return this.fn(this.inputCells.map(cell => cell.value));
  }
}
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
  }
}
}
