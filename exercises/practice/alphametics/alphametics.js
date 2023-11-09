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

const isValidSolution = (mapping, words, result) => {
  const sum = words
    .map((word) => parseInt(word.split('').map((c) => mapping[c]).join('')))
    .reduce((a, b) => a + b);
  const mappedResult = parseInt(result.split('').map((c) => mapping[c]).join(''));
  return sum === mappedResult;
};

const extractUniqueChars = (puzzle) => {
  const uniqueChars = new Set(puzzle.replace(/[^A-Za-z]/g, ''));
  return Array.from(uniqueChars);
};

export const solve = (puzzle) => {
  const [words, result] = puzzle.split(' == ');
  const uniqueChars = extractUniqueChars(puzzle);
  const wordList = words.split(' + ');

  if (uniqueChars.length > 10) return {};

  const permutations = permute([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  for (const perm of permutations) {
    const mapping = {};
    for (let i = 0; i < uniqueChars.length; i++) {
      mapping[uniqueChars[i]] = perm[i];
    }
    if (isValidSolution(mapping, wordList, result)) {
      return mapping;
    }
  }

  return {};
};
