//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const generateSpaces = (n) => ' '.repeat(n);

const generateRow = (letter, index, size) => {
  const spacesBefore = generateSpaces(size - index - 1);
  const spacesBetween = generateSpaces(index * 2 - 1);
  return index === 0
    ? spacesBefore + letter + spacesBefore
    : spacesBefore + letter + spacesBetween + letter + spacesBefore;
};

export const rows = (inputLetter) => {
  const size = inputLetter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  const topHalf = [...Array(size).keys()].map((index) =>
    generateRow(String.fromCharCode('A'.charCodeAt(0) + index), index, size)
  );
  const bottomHalf = [...topHalf].reverse().slice(1);
  return topHalf.concat(bottomHalf);
};
