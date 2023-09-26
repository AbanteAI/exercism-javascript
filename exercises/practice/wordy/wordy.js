//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (input) => {
  const parsedInput = parseInput(input);
  return evaluate(parsedInput);
};

const parseInput = (input) => {
  const regex = /(-?\d+)|plus|minus|multiplied by|divided by|raised to the/g;
  return input.match(regex);
};

const evaluate = (parsedInput) => {
  let result = parseInt(parsedInput[0], 10);

  for (let i = 1; i < parsedInput.length; i += 2) {
    const operation = parsedInput[i];
    const number = parseInt(parsedInput[i + 1], 10);

    switch (operation) {
      case 'plus':
        result += number;
        break;
      case 'minus':
        result -= number;
        break;
      case 'multiplied by':
        result *= number;
        break;
      case 'divided by':
        result /= number;
        break;
      case 'raised to the':
        result = Math.pow(result, number);
        break;
      default:
        throw new Error('Invalid operation');
    }
  }

  return result;
};
