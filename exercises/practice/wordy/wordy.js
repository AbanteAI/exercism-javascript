//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (problem) => {
  const tokens = problem.split(" ");
  let result = parseInt(tokens[2]);

  for (let i = 3; i < tokens.length; i += 2) {
    const operator = tokens[i - 1];
    const operand = parseInt(tokens[i]);

    if (operator === "plus") {
      result += operand;
    } else if (operator === "minus") {
      result -= operand;
    } else if (operator === "multiplied") {
      result *= operand;
    } else if (operator === "divided") {
      result /= operand;
    } else {
      throw new Error("Unsupported operation");
    }
  }

  return result;
};
