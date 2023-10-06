//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  const words = puzzle.split(' ').filter(word => word.match(/[A-Z]+/));
  const uniqueLetters = [...new Set(words.join('').split(''))];
  const firstLetters = words.map(word => word[0]);

  const letters = uniqueLetters.reduce((acc, letter) => {
    acc[letter] = 0;
    return acc;
  }, {});

  const isSolution = () => {
    const numbers = Object.values(letters);
    const sum = words.slice(0, -1).reduce((acc, word) => acc + parseInt(word.replace(/./g, c => letters[c])), 0);
    const result = words[words.length - 1].replace(/./g, c => letters[c]);
    return sum === parseInt(result);
  };

  const solveRecursively = (index) => {
    if (index === uniqueLetters.length) {
      return isSolution() ? letters : null;
    }

    for (let i = 0; i <= 9; i++) {
      if (i === 0 && firstLetters.includes(uniqueLetters[index])) {
        continue;
      }

      letters[uniqueLetters[index]] = i;
      const solution = solveRecursively(index + 1);
      if (solution) {
        return solution;
      }
    }

    letters[uniqueLetters[index]] = 0;
    return null;
  };

  return solveRecursively(0);
};
