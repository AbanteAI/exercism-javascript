//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function areAnagrams(word1, word2) {
  const sortedWord1 = word1.toLowerCase().split('').sort().join('');
  const sortedWord2 = word2.toLowerCase().split('').sort().join('');

  return sortedWord1 === sortedWord2;
}
export const findAnagrams = (target, candidates) => {
  const anagrams = candidates.filter(candidate => {
    if (candidate.toLowerCase() === target.toLowerCase()) {
      return false;
    }

    return areAnagrams(target, candidate);
  });

  return anagrams;
};
