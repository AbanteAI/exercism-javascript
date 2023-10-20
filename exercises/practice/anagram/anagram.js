//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  const lowercasedTarget = target.toLowerCase();
  const lowercasedCandidates = candidates.map(candidate => candidate.toLowerCase());

  return lowercasedCandidates.filter(candidate => {
    return (
      candidate !== lowercasedTarget &&
      sortString(candidate) === sortString(lowercasedTarget)
    );
  });
