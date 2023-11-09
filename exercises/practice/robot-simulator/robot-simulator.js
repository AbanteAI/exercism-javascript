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
    this._bearing = "north";
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
        case "R":
          this._turnRight();
          break;
        case "L":
          this._turnLeft();
          break;
        case "A":
          this._advance();
          break;
        default:
          throw new InvalidInputError(`Invalid instruction: ${instruction}`);
      }
    }
  }

  _turnRight() {
    const directions = ["north", "east", "south", "west"];
    const newIndex = (directions.indexOf(this._bearing) + 1) % 4;
    this._bearing = directions[newIndex];
  }

  _turnLeft() {
    const directions = ["north", "east", "south", "west"];
    const newIndex = (directions.indexOf(this._bearing) + 3) % 4;
    this._bearing = directions[newIndex];
  }

  _advance() {
    switch (this._bearing) {
      case "north":
        this._coordinates[1]++;
        break;
      case "east":
        this._coordinates[0]++;
        break;
      case "south":
        this._coordinates[1]--;
        break;
      case "west":
        this._coordinates[0]--;
        break;
    }
  }
}
