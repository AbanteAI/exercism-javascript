//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidates) => {
  const sortedTarget = sortWord(word);
  return candidates.filter(candidate => {
    const sortedCandidate = sortWord(candidate);
    return sortedTarget === sortedCandidate && word.toLowerCase() !== candidate.toLowerCase();
  });
};

const sortWord = word => {
  return word.toLowerCase().split('').sort().join('');
};
