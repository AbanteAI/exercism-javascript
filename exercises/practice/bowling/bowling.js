//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let score = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[rollIndex] === 10) { // Strike
        score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
        rollIndex++;
      } else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) { // Spare
        score += 10 + this.rolls[rollIndex + 2];
        rollIndex += 2;
      } else { // Open frame
        score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        rollIndex += 2;
      }
    }

    return score;
  }
}
