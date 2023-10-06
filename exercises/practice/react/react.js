//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  constructor(value) {
    this.value = value;
    this.callbacks = new Set();
  }
  }

  setValue(value) {
    if (this.value !== value) {
      this.value = value;
      this.callbacks.forEach(cb => cb());
    }
  }
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.fn = fn;
    this.value = this.fn(this.inputCells);

    this.callbacks = new Set();
    this.inputCells.forEach(cell => {
      cell.addCallback(() => {
        const newValue = this.fn(this.inputCells);
        if (this.value !== newValue) {
          this.value = newValue;
          this.callbacks.forEach(cb => cb());
        }
      });
    });
  }

  addCallback(cb) {
    this.callbacks.add(cb);
  }

  removeCallback(cb) {
    this.callbacks.delete(cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.callbacks = new Set();
  }
}
