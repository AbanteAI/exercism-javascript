//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {
  const sanitized = input.replace(/\s+/g, '');
  if (sanitized.length <= 1 || !/^\d+$/.test(sanitized)) {
    return false;
  }

  let sum = 0;
  const reverseDigits = sanitized.split('').reverse();

  for (let i = 0; i < reverseDigits.length; i++) {
    let digit = parseInt(reverseDigits[i], 10);

    if (i % 2 !== 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
  }

  return sum % 10 === 0;
};
