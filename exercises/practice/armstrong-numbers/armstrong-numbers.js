//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const numDigits = number.toString().length;
  let sum = 0;

  for (let digit of number.toString()) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  return sum === number;
};
