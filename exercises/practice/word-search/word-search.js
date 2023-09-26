//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  constructor(grid) {
    this.grid = grid;
  }

  find(words) {
    const directions = [
      [0, 1], // right
      [1, 0], // down
      [1, 1], // diagonal down-right
      [-1, 1], // diagonal up-right
    ];

    const searchWord = (word, x, y, dx, dy) => {
      for (let i = 0; i < word.length; i++) {
        if (
          x + i * dx < 0 ||
          x + i * dx >= this.grid.length ||
          y + i * dy < 0 ||
          y + i * dy >= this.grid[0].length ||
          this.grid[y + i * dy][x + i * dx] !== word[i]
        ) {
          return false;
        }
      }
      return true;
    };

    const searchDirection = (word, x, y, dx, dy) => {
      if (searchWord(word, x, y, dx, dy)) {
        return [
          [y + 1, x + 1],
          [y + 1 + (word.length - 1) * dy, x + 1 + (word.length - 1) * dx],
        ];
      }
      return null;
    };

    const searchAllDirections = (word, x, y) => {
      for (let direction of directions) {
        const result = searchDirection(word, x, y, direction[0], direction[1]);
        if (result) {
          return result;
        }
      }
      return null;
    };

    const searchGrid = (word) => {
      for (let y = 0; y < this.grid.length; y++) {
        for (let x = 0; x < this.grid[y].length; x++) {
          const result = searchAllDirections(word, x, y);
          if (result) {
            return result;
          }
        }
      }
      return null;
    };

    const result = {};
    for (let word of words) {
      result[word] = searchGrid(word);
    }
    return result;
  }
}
;

export default WordSearch;
