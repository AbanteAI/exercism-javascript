//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (collection, predicate) => {
  let result = [];
  for (let item of collection) {
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};

export const discard = (collection, predicate) => {
  let result = [];
  for (let item of collection) {
    if (!predicate(item)) {
      result.push(item);
    }
  }
  return result;
};
