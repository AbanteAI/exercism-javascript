//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const toBase10 = (number, base) => {
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    result += number[i] * Math.pow(base, number.length - 1 - i);
  }
  return result;
};

const fromBase10 = (number, base) => {
  const result = [];
  while (number > 0) {
    result.unshift(number % base);
    number = Math.floor(number / base);
  }
  return result;
};

export const convert = (number, baseA, baseB) => {
  if (baseA < 2 || baseB < 2) {
    throw new Error('Invalid base');
  }
  const base10Number = toBase10(number, baseA);
  return fromBase10(base10Number, baseB);
};
