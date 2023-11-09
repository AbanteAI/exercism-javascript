//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {
  if (input.length <= 1) return false;

  const cleanedInput = input.replace(/\s+/g, '');
  if (!/^\d+$/.test(cleanedInput)) return false;

  let sum = 0;
  let shouldDouble = cleanedInput.length % 2 === 0;

  for (const char of cleanedInput) {
    let digit = parseInt(char, 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};
