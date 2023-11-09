//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (input) => {
  const normalizedInput = input.toLowerCase().replace(/[^\w']+/g, ' ');
  const words = normalizedInput.trim().split(' ');

  const wordCount = {};

  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
};
