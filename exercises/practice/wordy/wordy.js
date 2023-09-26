//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (problem) => {
  // Handle problems with no operations
  if (!problem.includes("plus") && !problem.includes("minus") && !problem.includes("multiplied by") && !problem.includes("divided by")) {
    return parseInt(problem);
  }

  // Handle addition
  if (problem.includes("plus")) {
    const numbers = problem.split("plus").map((num) => parseInt(num.trim()));
    return numbers.reduce((sum, num) => sum + num);
  }

  // Handle subtraction
  if (problem.includes("minus")) {
    const numbers = problem.split("minus").map((num) => parseInt(num.trim()));
    return numbers.reduce((difference, num) => difference - num);
  }

  // Handle multiplication
  if (problem.includes("multiplied by")) {
    const numbers = problem.split("multiplied by").map((num) => parseInt(num.trim()));
    return numbers.reduce((product, num) => product * num);
  }

  // Handle division
  if (problem.includes("divided by")) {
    const numbers = problem.split("divided by").map((num) => parseInt(num.trim()));
    return numbers.reduce((quotient, num) => quotient / num);
  }

  // Handle multiple operations
  const operations = ["plus", "minus", "multiplied by", "divided by"];
  let result = 0;
  let currentOperation = null;

  problem.split(" ").forEach((word) => {
    if (operations.includes(word)) {
      currentOperation = word;
    } else if (currentOperation) {
      const num = parseInt(word);
      switch (currentOperation) {
        case "plus":
          result += num;
          break;
        case "minus":
          result -= num;
          break;
        case "multiplied":
          result *= num;
          break;
        case "divided":
          result /= num;
          break;
      }
    } else {
      result = parseInt(word);
    }
  });

 
};
