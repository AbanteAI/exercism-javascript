//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  const letters = new Set(puzzle.replace(/[^A-Z]/g, ''));
  const words = puzzle.split(' == ')[0].split(' + ');
  const resultWord = puzzle.split(' == ')[1];
  const uniqueLetters = Array.from(letters);

  if (uniqueLetters.length > 10) return null;

  const isSolution = (perm) => {
    const letterToDigit = {};
    uniqueLetters.forEach((letter, index) => {
      letterToDigit[letter] = perm[index];
    });

    if (words.some(word => letterToDigit[word[0]] === 0)) return false;

    const sum = words.reduce((total, word) => {
      return total + parseInt(word.split('').map(letter => letterToDigit[letter]).join(''), 10);
    }, 0);

    const result = parseInt(resultWord.split('').map(letter => letterToDigit[letter]).join(''), 10);

    return sum === result;
  };

  const permute = (arr, pos = 0) => {
    if (pos === arr.length - 1) return isSolution(arr) ? arr.slice() : null;
    for (let i = pos; i < arr.length; i++) {
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
      const result = permute(arr, pos + 1);
      if (result) return result;
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
    }
    return null;
  };

  const digits = Array.from({length: 10}, (_, i) => i);
  const solutionPerm = permute(digits);

  if (!solutionPerm) return null;

  const solution = {};
  uniqueLetters.forEach((letter, index) => {
    solution[letter] = solutionPerm[index];
  });

  return solution;
};
