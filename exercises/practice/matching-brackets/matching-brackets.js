//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const stack = [];

  for (const char of input) {
    if (brackets.hasOwnProperty(char)) {
      stack.push(brackets[char]);
    } else if (Object.values(brackets).includes(char)) {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
