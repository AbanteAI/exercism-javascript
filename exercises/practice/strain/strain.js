//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (collection, predicate) => {
  return collection.filter(predicate);
};

export const discard = (collection, predicate) => {
  return collection.filter((element) => !predicate(element));
};
export const discard = (collection, predicate) => {
  return collection.filter((element) => !predicate(element));
};

export const discard = () => {
  throw new Error('Remove this statement and implement this function');
};
