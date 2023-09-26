//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (subtitle) => {
  const words = subtitle.toLowerCase().split(/[^a-z0-9']+/).filter(word => word !== "");
  const wordCount = {};
  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
};
