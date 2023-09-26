//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const squareRoot = (radicand) => {
  if (radicand < 0) {
    throw new Error("Radicand must be a positive number");
  }
  return Math.sqrt(radicand);
};
