//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (input) => {
  const brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  const stack = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (brackets[char]) {
      stack.push(char);
    } else if (char === '}' || char === ']' || char === ')') {
      if (stack.length === 0 || brackets[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
