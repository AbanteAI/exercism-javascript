//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
  constructor(puzzle) {
    this.puzzle = puzzle;
  }
  ;
  }

  find(words) {
    const result = {};
    const directions = [
      [0, 1], [1, 0], [1, 1], [1, -1],
      [0, -1], [-1, 0], [-1, -1], [-1, 1]
    ];

    for (const word of words) {
      for (let row = 0; row < this.puzzle.length; row++) {
        for (let col = 0; col < this.puzzle[row].length; col++) {
          for (const direction of directions) {
            const endPosition = this.searchWord(word, row, col, direction);
            if (endPosition) {
              result[word] = {
                start: [row + 1, col + 1],
                end: [endPosition[0] + 1, endPosition[1] + 1]
              };
              break;
            }
          }
          if (result[word]) break;
        }
        if (result[word]) break;
      }
    }

    return result;
  }

  searchWord(word, row, col, direction) {
    let currentRow = row;
    let currentCol = col;
    let index = 0;

    while (
      currentRow >= 0 && currentRow < this.puzzle.length &&
      currentCol >= 0 && currentCol < this.puzzle[currentRow].length
    ) {
      if (this.puzzle[currentRow][currentCol] === word[index]) {
        index++;
        if (index === word.length) {
          return [currentRow, currentCol];
        }
      } else {
        break;
      }
      currentRow += direction[0];
      currentCol += direction[1];
    }

    return null;
  }
}

export default WordSearch;
