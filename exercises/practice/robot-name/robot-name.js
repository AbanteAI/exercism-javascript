// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this.reset();
  }

  reset() {
    this.name = Robot.generateUniqueName();
  }

  static generateUniqueName() {
    let newName;
    do {
      newName = Robot.generateRandomName();
    } while (Robot.names.has(newName));
    Robot.names.add(newName);
    return newName;
  }

  static generateRandomName() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letterPart = letters.charAt(Math.floor(Math.random() * letters.length)) +
      letters.charAt(Math.floor(Math.random() * letters.length));
    const numberPart = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return letterPart + numberPart;
  }
}

Robot.names = new Set();

Robot.releaseNames = () => {
  Robot.names.clear();
};
