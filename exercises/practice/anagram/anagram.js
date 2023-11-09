//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  const normalizeWord = word => word.toLowerCase();
  const sortString = str => str.split('').sort().join('');

  const normalizedTarget = normalizeWord(target);
  const sortedTarget = sortString(normalizedTarget);

  const isAnagram = candidate => {
    const normalizedCandidate = normalizeWord(candidate);
    return candidate !== target && sortString(normalizedCandidate) === sortedTarget;
  };

  return candidates.filter(isAnagram);
};
