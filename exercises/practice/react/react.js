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
    this.value = value;
    this.callbacks.forEach((callback) => callback());
  }

  addCallback(callback) {
    this.callbacks.push(callback);
  }

  removeCallback(callback) {
    this.callbacks = this.callbacks.filter((cb) => cb !== callback);
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.fn = fn;
    this.value = this.computeValue();
    this.callbacks = [];

    inputCells.forEach((cell) => {
      cell.addCallback(() => {
        const newValue = this.computeValue();
        if (newValue !== this.value) {
          this.value = newValue;
          this.callbacks.forEach((callback) => callback());
        }
      });
    });
  }

  computeValue() {
    return this.fn(this.inputCells);
  }

  addCallback(cb) {
    this.callbacks.push(cb);
  }

  removeCallback(cb) {
    this.callbacks = this.callbacks.filter((callback) => callback !== cb);
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = [];

    this.callback = () => {
      const newValue = this.fn();
      if (newValue !== this.values[this.values.length - 1]) {
        this.values.push(newValue);
      }
    };
  }

  addCallbackTo(cell) {
    cell.addCallback(this.callback);
  }

  removeCallbackFrom(cell) {
    cell.removeCallback(this.callback);
  }
}
