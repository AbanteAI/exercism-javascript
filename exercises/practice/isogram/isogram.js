//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  const cleanedWord = word.toLowerCase().replace(/[-\s]/g, '');
  const uniqueChars = new Set(cleanedWord);
  return uniqueChars.size === cleanedWord.length;
};
