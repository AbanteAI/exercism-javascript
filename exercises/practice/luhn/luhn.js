//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {
  const sanitizedInput = input.replace(/\s+/g, '');
  if (sanitizedInput.length <= 1 || /\D/.test(sanitizedInput)) {
    return false;
  }

  let sum = 0;
  let doubleDigit = false;

  for (let i = sanitizedInput.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitizedInput[i], 10);

    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    doubleDigit = !doubleDigit;
  }

  return sum % 10 === 0;
};
