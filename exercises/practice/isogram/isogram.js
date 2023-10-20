//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (input) => {
  const letters = input.toLowerCase().replace(/[\s-]/g, '');
  const uniqueLetters = new Set(letters);
  return letters.length === uniqueLetters.size;
};
