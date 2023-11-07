//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InputCell {
  constructor(value) {
    this.value = value;
    this.observers = [];
  }

  setValue(value) {
    this.value = value;
    this.notifyObservers();
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update());
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.computeFn = fn;
    this.callbacks = [];
    this.value = this.computeValue();
    this.inputCells.forEach(cell => cell.addObserver(this));
  }

  computeValue() {
    return this.computeFn(this.inputCells.map(cell => cell.value));
  }

  update() {
    let newValue = this.computeValue();
    if (this.value !== newValue) {
      this.value = newValue;
      this.callbacks.forEach(callback => callback.call(newValue));
    }
  }

  addCallback(callback) {
    this.callbacks.push(callback);
  }

  removeCallback(callback) {
    this.callbacks = this.callbacks.filter(cb => cb !== callback);
  }

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = [];
  }

  call(value) {
    this.values.push(value);
    this.fn(value);
  }
