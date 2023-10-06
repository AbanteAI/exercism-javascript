//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  isbn = isbn.replace(/-/g, ''); // Remove hyphens from ISBN string

  if (isbn.length !== 10) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 10; i++) {
    if (isbn[i] === 'X' && i === 9) {
      sum += 10;
    } else if (isNaN(isbn[i])) {
      return false;
    } else {
      sum += parseInt(isbn[i]) * (10 - i);
    }
  }

  return sum % 11 === 0;
};
