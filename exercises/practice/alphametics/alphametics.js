//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  const words = puzzle.split(/[^\w]+/).filter(word => word.match(/[A-Z]+/));
  const uniqueLetters = [...new Set(words.join('').split(''))];

  const solvePuzzle = (letters, numbers) => {
    if (letters.length === 0) {
      const sum = words.map(word => {
        let number = '';
        for (const letter of word) {
          number += numbers[letter];
        }
        return number;
      });
      if (sum.slice(0, -1).reduce((acc, curr) => acc + Number(curr), 0) === Number(sum.slice(-1)[0])) {
        return numbers;
      }
      if (sum.slice(0, -1).reduce((acc, curr) => acc + curr, 0) === sum.slice(-1)[0]) {
        return numbers;
      }
    } else {
      for (let i = 0; i < 10; i++) {
        if (!Object.values(numbers).includes(i.toString())) {
          const newNumbers = { ...numbers, [letters[0]]: i.toString() };
          const result = solvePuzzle(letters.slice(1), newNumbers);
          if (result) {
            return result;
          }
        }
      }
    }
    return null;
  };

  const result = solvePuzzle(uniqueLetters, {});
  if (result) {
    return result;
  } else {
    throw new Error('No solution found');
  }
};
