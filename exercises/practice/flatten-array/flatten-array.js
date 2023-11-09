//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (inputArray) => {
  const output = [];

  const flattenHelper = (arr) => {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flattenHelper(element);
      } else if (element !== null && element !== undefined) {
        output.push(element);
      }
    });
  };

  flattenHelper(inputArray);
  return output;
};
