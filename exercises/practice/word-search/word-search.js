//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
  constructor(puzzle) {
    this.puzzle = puzzle;
  }

  find(words) {
    const results = [];
    for (const word of words) {
      const wordLocation = this.searchWord(word);
      results.push(wordLocation);
    }
    return results;
  }

  searchWord(word) {
    const directions = [
      [0, 1], // right
      [0, -1], // left
      [1, 0], // down
      [-1, 0], // up
      [1, 1], // diagonal down-right
      [-1, -1], // diagonal up-left
      [1, -1], // diagonal down-left
      [-1, 1], // diagonal up-right
    ];

    const wordLength = word.length;
    const puzzleSize = this.puzzle.length;

    for (let row = 0; row < puzzleSize; row++) {
      for (let col = 0; col < puzzleSize; col++) {
        for (const direction of directions) {
          const [dx, dy] = direction;
          let found = true;

          for (let i = 0; i < wordLength; i++) {
            const newRow = row + i * dx;
            const newCol = col + i * dy;

            if (
              newRow < 0 ||
              newRow >= puzzleSize ||
              newCol < 0 ||
              newCol >= puzzleSize ||
              this.puzzle[newRow][newCol] !== word[i]
            ) {
              found = false;
              break;
            }
          }

          if (found) {
            const start = [row, col];
            const end = [row + (wordLength - 1) * dx, col + (wordLength - 1) * dy];
            return [start, end];
          }
        }
      }
    }

    return null;
  }
}

export default WordSearch;
}

