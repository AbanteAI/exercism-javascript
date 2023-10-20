//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const tokenize = (input) => {
  const tokens = input.match(/-?\d+|[a-z]+/gi);
  return tokens;
};

const parse = (tokens) => {
  const expression = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].match(/-?\d+/)) {
      expression.push(parseInt(tokens[i], 10));
    } else {
      expression.push(tokens[i]);
    }
  }
  return expression;
};

const evaluate = (expression) => {
  let result = expression[0];
  for (let i = 1; i < expression.length; i += 2) {
    const operator = expression[i];
    const operand = expression[i + 1];

    switch (operator) {
      case 'plus':
        result += operand;
        break;
      case 'minus':
        result -= operand;
        break;
      case 'multiplied':
        result *= operand;
        i++; // Skip the 'by' token
        break;
      case 'divided':
        result /= operand;
        i++; // Skip the 'by' token
        break;
      case 'raised':
        result = Math.pow(result, operand);
        i++; // Skip the 'to' and 'power' tokens
        break;
      default:
        throw new Error('Unsupported operation');
    }
  }
  return result;
};

export const answer = (input) => {
  const tokens = tokenize(input);
  const expression = parse(tokens);
  const result = evaluate(expression);
  return result;
};
