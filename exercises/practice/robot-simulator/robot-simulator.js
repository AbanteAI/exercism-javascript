//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  constructor() {
    this._bearing = 'north';
    this._coordinates = [0, 0];
  }

  get bearing() {
    return this._bearing;
  }

  get coordinates() {
    return this._coordinates;
  }

  place({ x, y, direction }) {
    this._coordinates = [x, y];
    this._bearing = direction;
  }

  evaluate(instructions) {
    for (const instruction of instructions) {
      switch (instruction) {
        case 'R':
          this.turnRight();
          break;
        case 'L':
          this.turnLeft();
          break;
        case 'A':
          this.advance();
          break;
        default:
          throw new InvalidInputError('Invalid instruction');
      }
    }
  }

  turnRight() {
    const directions = ['north', 'east', 'south', 'west'];
    const currentIndex = directions.indexOf(this._bearing);
    this._bearing = directions[(currentIndex + 1) % 4];
  }

  turnLeft() {
    const directions = ['north', 'east', 'south', 'west'];
    const currentIndex = directions.indexOf(this._bearing);
    this._bearing = directions[(currentIndex + 3) % 4];
  }

  advance() {
    switch (this._bearing) {
      case 'north':
        this._coordinates[1]++;
        break;
      case 'east':
        this._coordinates[0]++;
        break;
      case 'south':
        this._coordinates[1]--;
        break;
      case 'west':
        this._coordinates[0]--;
        break;
    }
  }
}
