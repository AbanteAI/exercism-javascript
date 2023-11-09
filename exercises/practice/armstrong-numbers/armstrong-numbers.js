//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const digits = number.toString().split('').map(Number);
  const power = digits.length;
  const sum = digits.reduce((accumulator, digit) => accumulator + Math.pow(digit, power), 0);
  return sum === number;
};
