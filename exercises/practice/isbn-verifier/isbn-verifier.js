//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (input) => {
  const cleanedInput = input.replace(/-/g, '');
  if (!/^\d{9}(\d|X)$/.test(cleanedInput)) {
    return false;
  }

  const digits = cleanedInput.split('').map((char, index) => {
    return char === 'X' && index === 9 ? 10 : parseInt(char, 10);
  });

  const sum = digits.reduce((acc, digit, index) => {
    return acc + digit * (10 - index);
  }, 0);

  return sum % 11 === 0;
};
};
