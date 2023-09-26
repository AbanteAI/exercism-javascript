//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {
  const strippedInput = input.replace(/\s/g, '');
  if (!/^\d+$/.test(strippedInput)) {
    return false;
  }
  
  let sum = 0;
  let double = false;
  for (let i = strippedInput.length - 1; i >= 0; i--) {
    let digit = parseInt(strippedInput[i], 10);
    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    double = !double;
  }
  
  return sum % 10 === 0;
};
