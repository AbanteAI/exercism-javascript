//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {
  const strippedInput = input.replace(/\s/g, '');
  if (strippedInput.length <= 1 || /[^0-9]/.test(strippedInput)) {
    return false;
  }

  const digits = strippedInput.split('').map(Number);
  const doubledDigits = digits.map((digit, index) => {
    if ((digits.length - index) % 2 === 0) {
      let doubledDigit = digit * 2;
      if (doubledDigit > 9) {
        doubledDigit -= 9;
      }
      return doubledDigit;
    }
    return digit;
  });

  const sum = doubledDigits.reduce((acc, curr) => acc + curr, 0);
  return sum % 10 === 0;
};
