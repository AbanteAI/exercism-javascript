//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (collection, predicate) => {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      result.push(collection[i]);
    }
  }
  return result;
};

export const discard = (collection, predicate) => {
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    if (!predicate(collection[i])) {
      result.push(collection[i]);
    }
  }
  return result;
};
