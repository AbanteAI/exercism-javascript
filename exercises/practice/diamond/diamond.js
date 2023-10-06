//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  const diamond = [];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letterIndex = alphabet.indexOf(letter.toUpperCase());

  for (let i = 0; i <= letterIndex; i++) {
    const row = Array(letterIndex + 1).fill(" ");
    row[letterIndex - i] = alphabet[i];
    row[letterIndex + i] = alphabet[i];
    diamond.push(row.join(""));
  }

  for (let i = letterIndex - 1; i >= 0; i--) {
    diamond.push(diamond[i]);
  }

  return diamond;
};
