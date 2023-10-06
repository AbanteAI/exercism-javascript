//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {
  const strippedInput = input.replace(/\s/g, '');
  if (!/^\d{2,}$/.test(strippedInput)) {
    return false;
  }

  const digits = strippedInput.split('').map(Number);
  const sum = digits.reduceRight((acc, digit, index) => {
    if (index % 2 === 0) {
      return acc + digit;
    } else {
      const doubled = digit * 2;
      return acc + (doubled > 9 ? doubled - 9 : doubled);
    }
  }, 0);

  return sum % 10 === 0;
};

