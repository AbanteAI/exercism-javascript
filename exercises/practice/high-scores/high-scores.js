//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class HighScores {
  constructor(scores) {
    this.scores = scores;
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }

  get personalBest() {
    return Math.max(...this.scores);
  }

  get personalTopThree() {
    return this.scores.sort((a, b) => b - a).slice(0, 3);
  }
}
  }

  get personalBest() {
    return Math.max(...this.scores);
  }

  get personalTopThree() {
    return this.scores.sort((a, b) => b - a).slice(0, 3);
  }
}
}
