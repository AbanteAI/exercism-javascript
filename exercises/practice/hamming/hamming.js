//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strandA, strandB) => {
  if (strandA.length !== strandB.length) {
    throw new Error('left and right strands must be of equal length');
  }

  let hammingDistance = 0;
  for (let i = 0; i < strandA.length; i++) {
    if (strandA.charAt(i) !== strandB.charAt(i)) {
      hammingDistance++;
    }
  }

  return hammingDistance;
};
