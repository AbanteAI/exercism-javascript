//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
  constructor(puzzle) {
    this.puzzle = puzzle.split('\n').map(row => row.split(''));
  }

  find(words) {
    const results = {};

    for (const word of words) {
      results[word] = this.search(word);
    }

    return results;
  }

  search(word) {
    // Implement search functionality for horizontal, vertical, and diagonal
    // This is a placeholder for the actual search logic
    return {
      start: [0, 0],
      end: [0, word.length - 1]
    };
  }
}

export default WordSearch;
