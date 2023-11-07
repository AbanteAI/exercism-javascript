//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (array) => {
  const flatArray = [];

  const flattenArray = (arr) => {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flattenArray(item);
      } else if (item !== null) {
        flatArray.push(item);
      }
    });
  };

  flattenArray(array);
  return flatArray;
};
