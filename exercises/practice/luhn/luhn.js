//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {
  // Remove spaces from the input
  const strippedInput = input.replace(/\s/g, '');

  // Check if the input is valid
  if (!/^\d+$/.test(strippedInput)) {
    return false;
  }

  // Double every second digit, starting from the right
  let sum = 0;
  let double = false;
  for (let i = strippedInput.length - 1; i >= 0; i--) {
    let digit = parseInt(strippedInput[i]);
    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    double = !double;
  }

  // Check if the sum is divisible by 10
  return sum % 10 === 0;
};
