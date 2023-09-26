//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this.scores = scores;
  }
    this.scores = scores;
  }
  }

  get scores() {
    return this.scores;
  }
    return this.scores;
  }
  }

  get latest() {
    return this.scores[this.scores.length - 1];
  }
    return this.scores[this.scores.length - 1];
  }
  }

  get personalBest() {
    return Math.max(...this.scores);
  }
    return Math.max(...this.scores);
  }
  }

  get personalTopThree() {
    return this.scores.sort((a, b) => b - a).slice(0, 3);
  }
    return this.scores.sort((a, b) => b - a).slice(0, 3);
  }
  }
}
