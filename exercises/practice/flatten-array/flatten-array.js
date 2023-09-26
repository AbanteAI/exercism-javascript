//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (inputArray) => {
  const outputArray = [];

  const flattenHelper = (arr) => {
    for (let element of arr) {
      if (Array.isArray(element)) {
        flattenHelper(element);
      } else if (element !== undefined && element !== null) {
        outputArray.push(element);
      }
    }
  };

  flattenHelper(inputArray);
  return outputArray;
};
