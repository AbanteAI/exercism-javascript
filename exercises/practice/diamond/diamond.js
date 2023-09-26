//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  const diamondSize = letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  const diamond = [];
  const middleRow = diamondSize * 2 - 1;

  const diamondSize = letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  const diamond = [];
  const middleRow = diamondSize * 2 - 1;

  for (let i = 0; i < diamondSize; i++) {
    const row = Array(middleRow).fill(' ');

    const currentLetter = String.fromCharCode('A'.charCodeAt(0) + i);
    const leftIndex = middleRow / 2 - i;
    const rightIndex = middleRow / 2 + i;

    row[leftIndex] = currentLetter;
    row[rightIndex] = currentLetter;

    diamond.push(row.join(''));
  }

  for (let i = diamondSize - 2; i >= 0; i--) {
    diamond.push(diamond[i]);
  }

  return diamond;
};
