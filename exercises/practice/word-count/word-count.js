//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (subtitle) => {
  const words = subtitle.split(/[^\w']+|(?<=\w)'(?=\w)/);
  const wordCounts = {};

  for (const word of words) {
    const lowercaseWord = word.toLowerCase();
    wordCounts[lowercaseWord] = (wordCounts[lowercaseWord] || 0) + 1;
  }

  return wordCounts;
};
