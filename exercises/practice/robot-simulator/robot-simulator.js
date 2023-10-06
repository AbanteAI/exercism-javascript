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

  constructor() {
    this.direction = 'north';
  }
  get bearing() {
    return this.direction;
  }


  get coordinates() {
    return { x: this.x, y: this.y };
  }


  place({ x, y, direction }) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }


  evaluate(instructions) {
    for (let instruction of instructions) {
      switch (instruction) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'A':
          this.advance();
          break;
      }
    }
  }

  turnLeft() {
    switch (this.direction) {
      case 'north':
        this.direction = 'west';
        break;
      case 'west':
        this.direction = 'south';
        break;
      case 'south':
        this.direction = 'east';
        break;
      case 'east':
        this.direction = 'north';
        break;
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
