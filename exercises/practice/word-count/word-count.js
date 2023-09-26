//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (input) => {
  const wordCounts = {};
  const words = input
    .toLowerCase()
    .split(/[^a-z0-9']+/)
    .filter((word) => word.length > 0);

  words.forEach((word) => {
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  });

  return wordCounts;
};
