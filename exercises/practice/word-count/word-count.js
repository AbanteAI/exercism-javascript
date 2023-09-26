//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  const words = phrase.toLowerCase().match(/[a-z0-9']+/g);
  const wordCount = {};

  words.forEach((word) => {
    if (word.startsWith("'") && word.endsWith("'")) {
      word = word.slice(1, -1);
    }
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  return wordCount;
};
