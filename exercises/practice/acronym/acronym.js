//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrase) => {
  return phrase
    .split(/\s|-/)
    .map(word => word.charAt(0).toUpperCase())
    .join('');
};
