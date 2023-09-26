//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  const words = puzzle.split(/[+=]/);
  const uniqueLetters = Array.from(new Set(puzzle.match(/[A-Z]/g)));
  const firstLetters = Array.from(new Set(words.map((word) => word[0])));
  const letters = Array.from(new Set(puzzle.match(/[A-Z]/g)));
  const digits = Array.from(new Array(10), (_, i) => i);

  const permute = (arr) => {
    if (arr.length === 0) {
      const equation = puzzle.replace(
        /[A-Z]/g,
        (letter) => letterToDigit[letter]
      );
      const [left, right, result] = equation.split(/[+=]/);
      if (+left + +right === +result) {
        return letterToDigit;
      }
      return null;
    }

    for (let i = 0; i < digits.length; i++) {
      const digit = digits[i];
      if (digit === 0 && firstLetters.includes(arr[0])) {
        continue;
      }
      if (!usedDigits.includes(digit)) {
        letterToDigit[arr[0]] = digit;
        usedDigits.push(digit);
        const remainingLetters = arr.slice(1);
        const result = permute(remainingLetters);
        if (result) {
          return result;
        }
        letterToDigit[arr[0]] = undefined;
        usedDigits.pop();
      }
    }
    return null;
  };

  const usedDigits = [];
  const letterToDigit = {};

  const result = permute(uniqueLetters);

  return result;
};
