//
// This is only a SKELETON file for the 'Alphametics' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const solve = (puzzle) => {
  const words = puzzle.split(/[^\w]+/).filter(Boolean);
  const uniqueLetters = [...new Set(puzzle.match(/[A-Z]/g))];
  const firstLetters = new Set(words.map(word => word[0]));
  const letters = [...new Set(words.join(''))];

  const evaluateEquation = (equation) => {
    let result = 0;
    let currentOperand = 0;
    let operation = '+';
    for (const char of equation) {
      if (/\d/.test(char)) {
        currentOperand = currentOperand * 10 + parseInt(char);
      } else if (/[+-]/.test(char)) {
        if (operation === '+') {
          result += currentOperand;
        } else {
          result -= currentOperand;
        }
        currentOperand = 0;
        operation = char;
      }
    }
    if (operation === '+') {
      result += currentOperand;
    } else {
      result -= currentOperand;
    }
    return result;
  };

  const isValidSolution = (values) => {
    const equation = puzzle.replace(/[A-Z]/g, letter => values.get(letter));
    return evaluateEquation(equation) === 0;
  };
  };

  const generatePermutations = (values) => {
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        if (isValidSolution(new Map([...values, ...m]))) return [...values, ...m];
        return [];
      }
      return arr.reduce((res, letter, i) => {
        const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
        return res.concat(permute(remaining, [...m, [letter, values.size]]));
      }, []);
    };

    return permute([...letters]);
  };

  const solvePuzzle = () => {
    const values = new Map();
    const permutedLetters = generatePermutations(values);
    for (const [letter, value] of permutedLetters) {
      if (!firstLetters.has(letter) || value !== 0) {
        values.set(letter, value);
      }
    }
    if (isValidSolution(values)) return Object.fromEntries(values);
    return {};
  };

  return solvePuzzle();
};
