//
// This is only a SKELETON file for the 'Accumulate' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const accumulate = (collection, operation) => {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    result.push(operation(collection[i]));
  }
  return result;
};
