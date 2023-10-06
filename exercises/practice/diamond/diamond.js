//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  if (letter === 'A') {
    return ['A'];
  }

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = alphabet.indexOf(letter);
  const diamondSize = index * 2 + 1;
  const diamond = [];

  for (let i = 0; i < diamondSize; i++) {
    const row = Array(diamondSize).fill(' ');
    const currentLetter = alphabet[Math.abs(index - i)];
    row[index - i] = currentLetter;
    row[index + i] = currentLetter;
    diamond.push(row.join(''));
  }

  return diamond;
};
