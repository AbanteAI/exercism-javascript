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
    this.x = 0;
    this.y = 0;
    this.direction = null;
  }
  get bearing() {
  get bearing() {
    if (this.direction === null) {
      throw new Error('Invalid bearing');
    }
    return this.direction;
  }
  }

  get coordinates() {
  get coordinates() {
    if (this.x === undefined || this.y === undefined) {
      throw new Error('Invalid coordinates');
    }
    return { x: this.x, y: this.y };
  }
  }

  place({ x, y, direction }) {
  place({ x, y, direction }) {
    if (!['north', 'east', 'south', 'west'].includes(direction)) {
      throw new InvalidInputError('Invalid direction');
    }
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
    this.y = y;
    this.direction = direction;
  }

  evaluate(instructions) {
    for (let instruction of instructions) {
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
    switch (this.direction) {
      case 'north':
        this.direction = 'east';
        break;
      case 'east':
        this.direction = 'south';
        break;
      case 'south':
        this.direction = 'west';
        break;
      case 'west':
        this.direction = 'north';
        break;
    }
  }

  turnLeft() {
    switch (this.direction) {
      case 'north':
        this.direction = 'west';
        break;
      case 'east':
        this.direction = 'north';
        break;
      case 'south':
        this.direction = 'east';
        break;
      case 'west':
        this.direction = 'south';
        break;
    }
  }

  advance() {
    switch (this.direction) {
      case 'north':
        this.y++;
        break;
      case 'east':
        this.x++;
        break;
      case 'south':
        this.y--;
        break;
      case 'west':
        this.x--;
        break;
    }
  }
}
