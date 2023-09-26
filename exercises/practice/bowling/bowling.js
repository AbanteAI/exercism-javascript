//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Bowling {
  constructor() {
    this.rolls = [];
    this.rolls = [];
  }

  roll(pins) {
    if (pins < 0 || pins > 10) {
      throw new Error('Invalid number of pins');
    }

    this.rolls.push(pins);
  }
  }

  score() {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(rollIndex)) {
        totalScore += 10 + this.strikeBonus(rollIndex);
        rollIndex++;
      } else if (this.isSpare(rollIndex)) {
        totalScore += 10 + this.spareBonus(rollIndex);
        rollIndex += 2;
      } else {
        totalScore += this.sumOfBallsInFrame(rollIndex);
        rollIndex += 2;
      }
    }

    return totalScore;
  }
;

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

  isSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  strikeBonus(rollIndex) {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  spareBonus(rollIndex) {
    return this.rolls[rollIndex + 2];
  }

  sumOfBallsInFrame(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }
  }
}
