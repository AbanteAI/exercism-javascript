//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  const sortedTarget = target.toLowerCase().split('').sort().join('');
  return candidates.filter(candidate => {
    const sortedCandidate = candidate.toLowerCase().split('').sort().join('');
    return sortedCandidate === sortedTarget && candidate.toLowerCase() !== target.toLowerCase();
  });
