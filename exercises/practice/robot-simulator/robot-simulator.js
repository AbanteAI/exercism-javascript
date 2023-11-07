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
    this._x = 0;
    this._y = 0;
  }

  get bearing() {
    return this._bearing;
  }

  get coordinates() {
    return [this._x, this._y];
  }

  place({ x, y, direction }) {
    this._x = x;
    this._y = y;
    this._bearing = direction;
  }

  evaluate(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      switch (instructions[i]) {
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
          throw new InvalidInputError('Invalid Instruction');
      }
    }
  }

  turnRight() {
    const directions = ['north', 'east', 'south', 'west'];
    const currentIndex = directions.indexOf(this._bearing);
    this._bearing = directions[(currentIndex + 1) % directions.length];
  }

  turnLeft() {
    const directions = ['north', 'west', 'south', 'east'];
    const currentIndex = directions.indexOf(this._bearing);
    this._bearing = directions[(currentIndex + 1) % directions.length];
  }

  advance() {
    switch (this._bearing) {
      case 'north':
        this._y += 1;
        break;
      case 'east':
        this._x += 1;
        break;
      case 'south':
        this._y -= 1;
        break;
      case 'west':
        this._x -= 1;
        break;
    }
  }
}
