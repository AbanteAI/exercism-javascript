//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (question) => {
  const operationMap = {
    'plus': (a, b) => a + b,
    'minus': (a, b) => a - b,
    'multiplied by': (a, b) => a * b,
    'divided by': (a, b) => a / b,
    'raised to the': (a, b) => Math.pow(a, b)
  };

  const parseQuestion = (q) => {
    const numPattern = /(-?\d+)/g;
    const opPattern = /plus|minus|multiplied by|divided by|raised to the/g;
    const numbers = q.match(numPattern).map(Number);
    const operations = q.match(opPattern);

    if (!numbers) {
      throw new Error('Syntax error');
    }

    let result = numbers[0];
    for (let i = 0; operations && i < operations.length; i++) {
      const operation = operations[i];
      const number = numbers[i + 1];
      if (!operationMap[operation]) {
        throw new Error('Unsupported operation');
      }
      result = operationMap[operation](result, number);
    }
    return result;
  };

  question = question.toLowerCase().replace(/what is /, '').replace(/\?/, '').replace(/th power/, '').trim();
  
  if (!question || question.trim().length === 0) {
    throw new Error('Unknown operation');
  }

  return parseQuestion(question);
};
