//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }

  find(words) {
    const result = {};
    for (const word of words) {
      result[word] = this.searchWord(word);
    }
    return result;
  }
}
}
  searchWord(word) {
    for (let row = 0; row < this.grid.length; row++) {
      for (let col = 0; col < this.grid[row].length; col++) {
        const found = this.searchFromPosition(row, col, word);
        if (found) {
          return [found.start, found.end];
        }
      }
    }
    return null;
  }

  searchFromPosition(row, col, word) {
    const directions = [
      { dr: -1, dc: 0 }, // up
      { dr: 1, dc: 0 }, // down
      { dr: 0, dc: -1 }, // left
      { dr: 0, dc: 1 }, // right
      { dr: -1, dc: -1 }, // up-left
      { dr: -1, dc: 1 }, // up-right
      { dr: 1, dc: -1 }, // down-left
      { dr: 1, dc: 1 }, // down-right
    ];

    for (const direction of directions) {
      let r = row;
      let c = col;
      let i = 0;

      while (
        r >= 0 &&
        r < this.grid.length &&
        c >= 0 &&
        c < this.grid[r].length &&
        this.grid[r][c] === word[i]
      ) {
        r += direction.dr;
        c += direction.dc;
        i++;

        if (i === word.length) {
          return {
            start: [row + 1, col + 1],
            end: [r - direction.dr + 1, c - direction.dc + 1],
          };
        }
      }
    }
    return null;
  }

export default WordSearch;
