//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (input) => {
  const result = [];

  const flattenHelper = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenHelper(arr[i]);
      } else if (arr[i] !== null) {
        result.push(arr[i]);
      }
    }
  };

  flattenHelper(input);

  return result;
};
