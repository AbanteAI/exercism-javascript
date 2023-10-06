// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this._name = this.generateName();
  }

  get name() {
    return this._name;
  }

  set name(value) {
    throw new Error('Cannot set robot name directly');
  }

  generateName() {
    let name = '';
    do {
      name = this.randomLetters(2) + this.randomNumbers(3);
    } while (usedNames.has(name));
    usedNames.add(name);
    return name;
  }

  randomLetters(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    return result;
  }

  randomNumbers(length) {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }
}

export class RobotName {
  static releaseNames() {
    usedNames.clear();
  }
}

const usedNames = new Set();

const usedNames = new Set();
