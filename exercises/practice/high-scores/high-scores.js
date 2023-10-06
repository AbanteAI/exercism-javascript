//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores = []) {
    this.scores = scores;
  }

  get _scores() {
    return this.scores;
  }

  get latest() {
    if (this.scores.length === 0) {
      throw new Error("No scores recorded");
    }
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
  get _scores() {
    return this.scores.slice();
  }
    return Math.max(...this.scores);
  }

  get personalTopThree() {
    return this.scores
      .sort((a, b) => b - a)
      .slice(0, 3);
  }
}
