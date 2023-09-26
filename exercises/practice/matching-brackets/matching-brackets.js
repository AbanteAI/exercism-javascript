//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  const stack = [];
  const openingBrackets = ['[', '{', '('];
  const closingBrackets = [']', '}', ')'];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpeningBracket = stack.pop();
      const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];

      if (lastOpeningBracket !== matchingOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
