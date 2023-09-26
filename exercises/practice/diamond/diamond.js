//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (inputLetter) => {
  const numRows = inputLetter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  const diamond = [];

  for (let i = 0; i < numRows; i++) {
    const currentLetter = String.fromCharCode('A'.charCodeAt(0) + i);
    const spacesBefore = ' '.repeat(numRows - i - 1);
    const spacesBetween = i > 0 ? ' '.repeat(2 * i - 1) : '';

    if (i === 0 || i === numRows - 1) {
      diamond.push(`${spacesBefore}${currentLetter}${spacesBefore}`);
    } else {
      diamond.push(`${spacesBefore}${currentLetter}${spacesBetween}${currentLetter}${spacesBefore}`);
    }
  }

  return diamond.concat(diamond.slice(0, -1).reverse());
};
