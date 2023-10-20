//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (inputArray) => {
  const outputArray = [];

  const flattenHelper = (arr) => {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flattenHelper(item);
      } else if (item !== null && item !== undefined) {
        outputArray.push(item);
      }
    }
  };

  flattenHelper(inputArray);
  return outputArray;
};
