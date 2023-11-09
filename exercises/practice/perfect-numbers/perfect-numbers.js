//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if (number <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  const aliquotSum = calculateAliquotSum(number);

  if (aliquotSum === number) {
    return "perfect";
  } else if (aliquotSum > number) {
    return "abundant";
  } else {
    return "deficient";
  }
};

const calculateAliquotSum = (number) => {
  let sum = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
};
