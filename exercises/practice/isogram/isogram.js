//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  const letters = word.toLowerCase().replace(/[^a-z]/g, '');
  const uniqueLetters = new Set(letters);
  return letters.length === uniqueLetters.size;
};
