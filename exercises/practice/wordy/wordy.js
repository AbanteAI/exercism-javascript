//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {
  const words = question
    .replace('?', '')
    .split(' ');

  let result = parseInt(words[2]);

  for (let i = 3; i < words.length; i += 2) {
    const operator = words[i - 1];
    const operand = parseInt(words[i]);

    if (operator === 'plus') {
      result += operand;
    } else if (operator === 'minus') {
      result -= operand;
    } else if (operator === 'multiplied') {
      result *= operand;
    } else if (operator === 'divided') {
      result /= operand;
    }
  }

  return result;
};
