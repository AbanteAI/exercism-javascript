//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  class WordSearch {
    constructor(puzzle) {
      this.puzzle = puzzle;
    }

    find(words) {
      const result = [];
      for (const word of words) {
        const positions = this.searchWord(word);
        if (positions) {
          result.push({ word, start: positions[0], end: positions[positions.length - 1] });
        }
      }
      return result;
    }

    searchWord(word) {
      const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0], // horizontal and vertical
        [1, 1], [1, -1], [-1, 1], [-1, -1] // diagonal
      ];

      for (let row = 0; row < this.puzzle.length; row++) {
        for (let col = 0; col < this.puzzle[row].length; col++) {
          if (this.puzzle[row][col] === word[0]) {
            for (const direction of directions) {
              const positions = this.checkDirection(word, row, col, direction);
              if (positions) {
                return positions;
              }
            }
          }
        }
      }

      return null;
    }

    checkDirection(word, row, col, direction) {
      const positions = [[row, col]];
      for (let i = 1; i < word.length; i++) {
        const newRow = row + direction[0] * i;
        const newCol = col + direction[1] * i;
        if (!this.isValidPosition(newRow, newCol) || this.puzzle[newRow][newCol] !== word[i]) {
          return null;
        }
        positions.push([newRow, newCol]);
      }
      return positions;
    }

    isValidPosition(row, col) {
      return row >= 0 && row < this.puzzle.length && col >= 0 && col < this.puzzle[row].length;
    }
  }

  find() {
    throw new Error('Remove this statement and implement this function');
  }
}

export default WordSearch;
