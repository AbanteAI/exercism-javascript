//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  const normalizedTarget = target.toLowerCase().split('').sort().join('');
  const anagrams = [];

  for (const candidate of candidates) {
    const normalizedCandidate = candidate.toLowerCase().split('').sort().join('');

    if (normalizedCandidate === normalizedTarget && candidate.toLowerCase() !== target.toLowerCase()) {
      anagrams.push(candidate);
    }
  }

  return anagrams;
};
