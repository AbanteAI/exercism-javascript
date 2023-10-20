//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const index = alphabet.indexOf(letter);
  const diamond = [];

  if (letter === 'A') {
    diamond.push('A');
    return diamond;
  }

  for (let i = 0; i <= index; i++) {
    const row = ' '.repeat(index - i) + alphabet[i] + ' '.repeat(i > 0 ? 2 * i - 1 : 0);
    diamond.push(row);
  }

  for (let i = index - 1; i >= 0; i--) {
    const row = ' '.repeat(index - i) + alphabet[i] + ' '.repeat(i > 0 ? 2 * i - 1 : 0);
    diamond.push(row);
  }

  return diamond;
};
};
