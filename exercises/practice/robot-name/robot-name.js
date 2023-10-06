// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this._name = this.generateRandomName();
  }

  static releaseNames() {}
    return this._name;
  }

  reset() {
    this._name = this.generateRandomName();
  }

  generateRandomName() {
    let name = "";
    for (let i = 0; i < 2; i++) {
      name += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }
    for (let i = 0; i < 3; i++) {
      name += Math.floor(Math.random() * 10);
    }
    return name;
  }

  static releaseNames() {
    usedNames.clear();
  }
