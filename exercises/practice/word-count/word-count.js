//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  const wordCounts = {};
  const words = phrase.toLowerCase().match(/\b[\w']+\b/g);

  words.forEach(word => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  return wordCounts;
};
