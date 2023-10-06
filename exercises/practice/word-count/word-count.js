//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  const words = phrase.toLowerCase().match(/[a-z0-9]+('[a-z0-9]+)*/g);
  const wordCount = {};
  
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  return wordCount;
};
