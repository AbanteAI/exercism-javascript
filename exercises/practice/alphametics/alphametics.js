//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  const [left, right] = puzzle.split(" = ");
  const words = puzzle.match(/[A-Z]+/g);
  const uniqueChars = [...new Set(puzzle.match(/[A-Z]/g))];
  const firstChars = new Set(words.map((word) => word[0]));

  const chars = uniqueChars.join("");
  const numbers = Array.from({ length: 10 }, (_, i) => i);

  for (const permutation of getPermutations(numbers, uniqueChars.length)) {
    const charToNumber = Object.fromEntries(uniqueChars.map((char, i) => [char, permutation[i]]));

    if ([...firstChars].some((char) => charToNumber[char] === 0)) continue;

    const expression = puzzle.replace(/[A-Z]/g, (char) => charToNumber[char]);
    if (eval(expression)) return charToNumber;
  }

  return {};
};

function* getPermutations(numbers, length) {
  if (length === 1) {
    yield numbers;
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    const withoutI = [...numbers.slice(0, i), ...numbers.slice(i + 1)];
    for (const permutation of getPermutations(withoutI, length - 1)) {
      yield [numbers[i], ...permutation];
    }
  }
}
