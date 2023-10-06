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
      const locations = this.searchWord(word);
      if (locations.length > 0) {
        result.push({ word, start: locations[0], end: locations[locations.length - 1] });
      }
    }
    return result;
  }

  searchWord(word) {
    const directions = [
      [0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];
    const rows = this.puzzle.length;
    const cols = this.puzzle[0].length;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (this.puzzle[row][col] === word[0]) {
          for (const [dx, dy] of directions) {
            let r = row;
            let c = col;
            let found = true;
            for (const char of word.slice(1)) {
              r += dx;
              c += dy;
              if (r < 0 || r >= rows || c < 0 || c >= cols || this.puzzle[r][c] !== char) {
                found = false;
                break;
              }
            }
            if (found) {
              const locations = [];
              for (let i = 0; i < word.length; i++) {
                locations.push([row + i * dx, col + i * dy]);
              }
              return locations;
            }
          }
        }
      }
    }

    return [];
  }
}

export default WordSearch;
