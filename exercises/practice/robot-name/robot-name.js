// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const usedNames = new Set();

function generateUniqueName() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  let name = '';
  do {
    name = letters.charAt(Math.floor(Math.random() * 26)) +
           letters.charAt(Math.floor(Math.random() * 26)) +
           digits.charAt(Math.floor(Math.random() * 10)) +
           digits.charAt(Math.floor(Math.random() * 10)) +
           digits.charAt(Math.floor(Math.random() * 10));
  } while (usedNames.has(name));
  usedNames.add(name);
  return name;
}

export class Robot {
  constructor() {
    this._name = generateUniqueName();
  }

  get name() {
    return this._name;
  }

  reset() {
    usedNames.delete(this._name);
    this._name = generateUniqueName();
  }
}

Robot.releaseNames = () => {
  usedNames.clear();
};
