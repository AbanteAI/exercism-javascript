//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {
  const tokens = question
    .replace('?', '')
    .split(' ')
    .filter((token) => token !== 'by');

  if (tokens[0] !== 'What' || tokens[1] !== 'is') {
    throw new Error('Unknown operation');
  }

  let result = parseInt(tokens[2]);
  for (let i = 3; i < tokens.length; i += 2) {
    const operator = tokens[i - 1];
    const number = parseInt(tokens[i]);

    if (operator === 'plus') {
      result += number;
    } else if (operator === 'minus') {
      result -= number;
    } else if (operator === 'multiplied') {
      result *= number;
    } else if (operator === 'divided') {
      result /= number;
    } else {
      throw new Error('Unknown operator');
    }
  }

  return result;
};
