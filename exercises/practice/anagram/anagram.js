//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  const normalizedTarget = target.toLowerCase();
  const sortedTarget = normalizedTarget.split('').sort().join('');

  const isAnagram = (word) => {
    const normalizedWord = word.toLowerCase();
    if (normalizedWord === normalizedTarget) {
      return false;
    }
    return normalizedWord.split('').sort().join('') === sortedTarget;
  };

  return candidates.filter(candidate => isAnagram(candidate));
};
