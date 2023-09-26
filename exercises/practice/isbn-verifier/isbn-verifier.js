//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  // Preprocess the input string to remove dashes
  const processedIsbn = isbn.replace(/-/g, '');

  // Check if the length is valid
  if (processedIsbn.length !== 10) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < processedIsbn.length; i++) {
    const digit = processedIsbn[i];

    // Check if the digit is valid
    if (i === 9 && digit === 'X') {
      sum += 10;
    } else if (digit >= '0' && digit <= '9') {
      sum += parseInt(digit) * (10 - i);
    } else {
      return false;
    }
  }

  // Check if the result is divisible by 11
  return sum % 11 === 0;
};
