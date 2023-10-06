//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidates) => {
  const sortedWord = sortWord(word.toLowerCase());
  return candidates.filter(candidate => {
    const sortedCandidate = sortWord(candidate.toLowerCase());
    return sortedWord === sortedCandidate && word.toLowerCase() !== candidate.toLowerCase();
  });
};

const sortWord = word => word.split('').sort().join('');

