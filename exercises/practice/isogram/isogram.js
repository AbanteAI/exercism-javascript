//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  const cleanedWord = word.replace(/[\s-]/g, "").toLowerCase();
  const uniqueLetters = new Set(cleanedWord);
  return cleanedWord.length === uniqueLetters.size;
};
