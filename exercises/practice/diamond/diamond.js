//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (input) => {
  if (input === 'A') {
    return ['A'];
  }

  const getRow = (char, maxWidth) => {
    const spaceOutside = ' '.repeat((maxWidth - char.charCodeAt(0) + 'A'.charCodeAt(0)) / 2);
    const spaceInside = char === 'A' ? '' : ' '.repeat((char.charCodeAt(0) - 'A'.charCodeAt(0)) * 2 - 1);
    return `${spaceOutside}${char}${spaceInside}${char !== 'A' ? char : ''}${spaceOutside}`;
  };

  const diamondWidth = input.charCodeAt(0) - 'A'.charCodeAt(0);
  let diamond = [];

  // Top half of the diamond
  for (let i = 0; i <= diamondWidth; i++) {
    const char = String.fromCharCode('A'.charCodeAt(0) + i);
    diamond.push(getRow(char, diamondWidth * 2 + 1));
  }

  // Bottom half of the diamond
  for (let i = diamondWidth - 1; i >= 0; i--) {
    const char = String.fromCharCode('A'.charCodeAt(0) + i);
    diamond.push(getRow(char, diamondWidth * 2 + 1));
  }

  return diamond;
};
