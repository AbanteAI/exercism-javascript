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
      if (positions.length > 0) {
        result.push({
          word: word,
          start: positions[0],
          end: positions[positions.length - 1]
        });
      }
    }
    return result;
  }

  searchWord(word) {
    // Implementation for searching the word in the puzzle
  }
}

export default WordSearch;
      const positions = this.searchWord(word);
      if (positions.length > 0) {
        result.push({
          word: word,
          start: positions[0],
          end: positions[positions.length - 1]
        });
      }
    }
    return result;
  }

  searchWord(word) {
    // Implementation for searching the word in the puzzle
  }
}

export default WordSearch;
}

export default WordSearch;
