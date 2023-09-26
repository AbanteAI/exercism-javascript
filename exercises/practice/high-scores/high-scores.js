//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores = []) {
    this.scores = scores;
  }

  get scores() {
    return this._scores;
  }

  set scores(scores) {
    this._scores = scores;
  }

  get latest() {
    if (this.scores.length === 0) {
      throw new Error('No scores available');
    }
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    if (this.scores.length === 0) {
      throw new Error('No scores available');
    }
    return Math.max(...this.scores);
  }

  get personalTopThree() {
    return this.scores
      .sort((a, b) => b - a)
      .slice(0, 3);
  }
}
  }

  get scores() {
    return this._scores;
  }

  set scores(scores) {
    this._scores = scores;
  }

  get latest() {
    if (this.scores.length === 0) {
      throw new Error('No scores available');
    }
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    if (this.scores.length === 0) {
      throw new Error('No scores available');
    }
    return Math.max(...this.scores);
  }

  get personalTopThree() {
    return this.scores
      .sort((a, b) => b - a)
      .slice(0, 3);
  }
}
  }

  get scores() {
    throw new Error('Remove this statement and implement this function');
  }

  get latest() {
    throw new Error('Remove this statement and implement this function');
  }

  get personalBest() {
    throw new Error('Remove this statement and implement this function');
  }

  get personalTopThree() {
    throw new Error('Remove this statement and implement this function');
  }
}
