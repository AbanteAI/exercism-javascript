// import WordSearch from './word-search';
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }

  find(puzzle, words) {
    const result = {};

    for (const word of words) {
      const wordLength = word.length;
      const firstLetter = word[0];

      for (let row = 0; row < puzzle.length; row++) {
        for (let col = 0; col < puzzle[row].length; col++) {
          const currentLetter = puzzle[row][col];

          if (currentLetter === firstLetter) {
            // Check right
            if (col + wordLength <= puzzle[row].length) {
              let found = true;
              for (let i = 1; i < wordLength; i++) {
                if (puzzle[row][col + i] !== word[i]) {
                  found = false;
                  break;
                }
              }
              if (found) {
                result[word] = {
                  start: [row, col],
                  end: [row, col + wordLength - 1],
                };
                break;
              }
            }

            // Check down
            if (row + wordLength <= puzzle.length) {
              let found = true;
              for (let i = 1; i < wordLength; i++) {
                if (puzzle[row + i][col] !== word[i]) {
                  found = false;
                  break;
                }
              }
              if (found) {
                result[word] = {
                  start: [row, col],
                  end: [row + wordLength - 1, col],
                };
                break;
              }
            }

            // Check diagonal
            if (col + wordLength <= puzzle[row].length && row + wordLength <= puzzle.length) {
              let found = true;
              for (let i = 1; i < wordLength; i++) {
                if (puzzle[row + i][col + i] !== word[i]) {
                  found = false;
                  break;
                }
              }
              if (found) {
                result[word] = {
                  start: [row, col],
                  end: [row + wordLength - 1, col + wordLength - 1],
                };
                break;
              }
            }
          }
        }

        if (result[word]) {
          break;
        }
      }
    }

    return result;
  }
  }
}

export default WordSearch;
