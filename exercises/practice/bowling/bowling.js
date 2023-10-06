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
      throw new Error('Invalid roll');
    }
    this.rolls.push(pins);
  }

  score() {
    let totalScore = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (isStrike()) {
        totalScore += 10 + strikeBonus();
        rollIndex++;
      } else if (isSpare()) {
        totalScore += 10 + spareBonus();
        rollIndex += 2;
      } else {
        totalScore += sumOfBallsInFrame();
        rollIndex += 2;
      }
    }

    return totalScore;

    function isStrike(rolls, rollIndex) {
      return rolls[rollIndex] === 10;
    }

    function isSpare(rolls, rollIndex) {
      return rolls[rollIndex] + rolls[rollIndex + 1] === 10;
    }

    function strikeBonus(rolls, rollIndex) {
      return rolls[rollIndex + 1] + rolls[rollIndex + 2];
    }

    function spareBonus(rolls, rollIndex) {
      return rolls[rollIndex + 2];
    }

    function sumOfBallsInFrame(rolls, rollIndex) {
      return rolls[rollIndex] + rolls[rollIndex + 1];
    }
  }
}
