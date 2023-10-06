//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target, candidates) => {
  const sortedTarget = sortString(target);

  return candidates.filter(candidate => {
    const sortedCandidate = sortString(candidate);
    return (
      sortedCandidate === sortedTarget &&
      candidate.toLowerCase() !== target.toLowerCase()
    );
  });
};

const sortString = str =>
  str
    .toLowerCase()
    .split("")
    .sort()
    .join("");

