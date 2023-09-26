//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const digits = number.toString().split('');
  const power = digits.length;

  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(Number(digit), power);
  }, 0);

  return sum === number;
};
