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
                throw new InvalidInputError(`Invalid instruction: ${instruction}`);
        }
    }
}

turnRight() {
    const directions = ['north', 'east', 'south', 'west'];
    const currentDirectionIndex = directions.indexOf(this.direction);
    this.direction = directions[(currentDirectionIndex + 1) % directions.length];
}

turnLeft() {
    const directions = ['north', 'west', 'south', 'east'];
    const currentDirectionIndex = directions.indexOf(this.direction);
    this.direction = directions[(currentDirectionIndex + 1) % directions.length];
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

  get coordinates() {
    throw new Error('Remove this statement and implement this function');
  }

  place({ x, y, direction }) {
    throw new Error('Remove this statement and implement this function');
  }

  evaluate(instructions) {
    throw new Error('Remove this statement and implement this function');
  }
}
