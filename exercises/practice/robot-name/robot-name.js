// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const existingNames = new Set();

function generateRandomName() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];
  const randomDigit = () => Math.floor(Math.random() * 10);

  let name = "";
  do {
    name = randomLetter() + randomLetter() + randomDigit() + randomDigit() + randomDigit();
  } while (existingNames.has(name));

  existingNames.add(name);
  return name;
}

export class Robot {
  constructor() {
    this.name = generateRandomName();
  }

  reset() {
    existingNames.delete(this.name);
    this.name = generateRandomName();
  }
}

Robot.releaseNames = () => {
  existingNames.clear();
};

Robot.releaseNames = () => {};
