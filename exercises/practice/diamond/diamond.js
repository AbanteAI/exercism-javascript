//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  const charCodeA = 'A'.charCodeAt(0);
  const charCodeLetter = letter.charCodeAt(0);
  const diamondSize = charCodeLetter - charCodeA + 1;
  const diamond = [];

  for (let i = 0; i < diamondSize; i++) {
    const row = Array(diamondSize * 2 - 1).fill(' ');
    const currentCharCode = charCodeA + i;
    const distance = currentCharCode - charCodeA;
    row[diamondSize - distance - 1] = row[diamondSize + distance - 1] = String.fromCharCode(currentCharCode);
    diamond.push(row.join(''));
  }

  for (let i = diamondSize - 2; i >= 0; i--) {
    diamond.push(diamond[i]);
  }

  return diamond;
};
