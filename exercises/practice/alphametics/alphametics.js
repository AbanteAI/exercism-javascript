//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const permute = (arr) => {
  if (arr.length === 0) return [[]];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = permute(arr.slice(0, i).concat(arr.slice(i + 1)));
    for (const p of rest) {
      result.push([arr[i], ...p]);
    }
  }
  return result;
};

const isValidSolution = (words, values, permutation) => {
  const letterToNumber = new Map();
  for (let i = 0; i < values.length; i++) {
    letterToNumber.set(values[i], permutation[i]);
  }

  const numbers = words.map(word =>
    parseInt(word.split('').map(letter => letterToNumber.get(letter)).join(''))
  );

  for (const number of numbers) {
    if (number.toString().length !== String(Math.floor(number)).length) {
      return false;
    }
  }

  const sum = numbers.slice(0, -1).reduce((a, b) => a + b, 0);
  return sum === numbers[numbers.length - 1];
};

export const solve = (puzzle) => {
  const words = puzzle.split(/[^A-Z]+/);
  const values = Array.from(new Set(puzzle.match(/[A-Z]/g)));
  const permutations = permute([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, values.length));

  for (const permutation of permutations) {
    if (isValidSolution(words, values, permutation)) {
      const solution = {};
      for (let i = 0; i < values.length; i++) {
        solution[values[i]] = permutation[i];
      }
      return solution;
    }
  }

  return null;
};
