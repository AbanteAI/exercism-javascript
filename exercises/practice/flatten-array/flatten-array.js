//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Input is not a valid array');
  }

  const result = [];

  const flattenHelper = (arr) => {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flattenHelper(item);
      } else if (item !== null && item !== undefined) {
      }
    }
  };

  flattenHelper(arr);

  return result;
};
