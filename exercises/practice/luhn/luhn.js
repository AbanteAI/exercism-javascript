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

  for (const digit of cleanedInput) {
    let value = parseInt(digit, 10);
    if (shouldDouble) {
      value *= 2;
      if (value > 9) value -= 9;
    }
    sum += value;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};
