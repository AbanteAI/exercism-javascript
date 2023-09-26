//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  const words = puzzle.split(/ \+ | == /);
  const uniqueLetters = Array.from(new Set(puzzle.replace(/[^A-Z]/g, '')));
  if (uniqueLetters.length > 10) return null;

  const permutations = generatePermutations('0123456789', uniqueLetters.length);
  for (const perm of permutations) {
    const letterToNum = new Map();
    for (let i = 0; i < uniqueLetters.length; i++) {
      letterToNum.set(uniqueLetters[i], perm[i]);
    }
    if (isValid(words, letterToNum)) {
      return Object.fromEntries(letterToNum);
    }
  }
  return null;
};

const generatePermutations = (str, len) => {
  if (len === 1) return str.split('');
  const perms = [];
  for (let i = 0; i < str.length; i++) {
    const rest = str.slice(0, i) + str.slice(i + 1);
    for (const perm of generatePermutations(rest, len - 1)) {
      perms.push(str[i] + perm);
    }
  }
  return perms;
};

const isValid = (words, letterToNum) => {
  let sum = 0;
  for (let i = 0; i < words.length - 1; i++) {
    const num = wordToNum(words[i], letterToNum);
    if (num === null) return false;
    sum += num;
  }
  const result = wordToNum(words[words.length - 1], letterToNum);
  return sum === result;
};

const wordToNum = (word, letterToNum) => {
  let num = '';
  for (const letter of word) {
    const digit = letterToNum.get(letter);
    if (digit === '0' && num === '') return null;
    num += digit;
  }
  return parseInt(num, 10);
};
