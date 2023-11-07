//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (limit, multiples) => {
  const uniqueMultiples = new Set();
  
  if (!Array.isArray(multiples)) {
    multiples = [multiples];
  }
    for (let multiple = baseValue; multiple < limit; multiple += baseValue) {
      uniqueMultiples.add(multiple);
    }
  });

  return Array.from(uniqueMultiples).reduce((acc, curr) => acc + curr, 0);
};
