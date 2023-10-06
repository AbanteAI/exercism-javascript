//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  const words = phrase.toLowerCase().match(/\b\w+'\w+|\b\w+\b/g);
  const wordCount = {};

  if (words) {
    words.forEach((word) => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
  }

  return wordCount;
};
