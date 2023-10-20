//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Bowling {
  constructor() {
    this.rolls = [];
  }
  roll(pins) {
    if (pins < 0 || pins > 10) {
      throw new Error("Invalid number of pins");
    }
    this.rolls.push(pins);
  }

  score() {
    let score = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[frameIndex] === 10) { // Strike
        if (frameIndex + 2 >= this.rolls.length) {
          throw new Error("Score cannot be taken until the end of the game");
        }
        score += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
        frameIndex++;
      } else if (this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10) { // Spare
        if (frameIndex + 2 >= this.rolls.length) {
          throw new Error("Score cannot be taken until the end of the game");
        }
        score += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else { // Open frame
        if (frameIndex + 1 >= this.rolls.length) {
          throw new Error("Score cannot be taken until the end of the game");
        }
        score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }

    return score;
  }
}
