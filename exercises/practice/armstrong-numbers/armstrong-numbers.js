//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const digits = String(number).split('').map(Number);
  const numberOfDigits = digits.length;
  const sumOfPowers = digits.reduce((sum, digit) => sum + digit ** numberOfDigits, 0);
  return sumOfPowers === number;
};
