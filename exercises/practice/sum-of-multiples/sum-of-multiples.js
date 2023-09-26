//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (level, multiples) => {
  if (!Array.isArray(multiples)) {
    return 0;
  }

  const uniqueMultiples = new Set();

  multiples.forEach((multiple) => {
    for (let i = multiple; i < level; i += multiple) {
      uniqueMultiples.add(i);
    }
  });

  return [...uniqueMultiples].reduce((sum, multiple) => sum + multiple, 0);
};
  const uniqueMultiples = new Set();

  multiples.forEach((multiple) => {
    for (let i = multiple; i < level; i += multiple) {
      uniqueMultiples.add(i);
    }
  });

  return [...uniqueMultiples].reduce((sum, multiple) => sum + multiple, 0);
};
