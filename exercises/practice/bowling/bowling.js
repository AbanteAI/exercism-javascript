//
// This is only a SKELETON file for the 'Bowling' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  constructor() {
    this.rolls = [];
  }
  roll(pins) {
    if (pins < 0 || pins > 10) {
      throw new Error('Invalid number of pins');
    }
    this.rolls.push(pins);
  }

  score() {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(rollIndex)) {
        totalScore += this.strikeScore(rollIndex);
        rollIndex += 1;
      } else if (this.isSpare(rollIndex)) {
        totalScore += this.spareScore(rollIndex);
        rollIndex += 2;
      } else {
        totalScore += this.openFrameScore(rollIndex);
        rollIndex += 2;
      }
    }

    return totalScore;
  }
}
