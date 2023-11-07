//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strandA, strandB) => {
  if (strandA.length !== strandB.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  let distance = 0;
  for (let i = 0; i < strandA.length; i++) {
    if (strandA[i] !== strandB[i]) {
      distance++;
    }
  }

  return distance;
};
