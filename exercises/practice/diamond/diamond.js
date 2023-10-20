//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (inputLetter) => {
  const letterIndex = inputLetter.charCodeAt(0) - 'A'.charCodeAt(0);
  const diamondSize = 2 * letterIndex + 1;
  const diamond = [];

  for (let i = 0; i < diamondSize; i++) {
    const currentLetter = String.fromCharCode('A'.charCodeAt(0) + Math.abs(letterIndex - i));
    const spacesBefore = ' '.repeat(Math.abs(letterIndex - i));
    const spacesBetween = letterIndex === 0 ? 0 : ' '.repeat(2 * (letterIndex - Math.abs(letterIndex - i)) - 1);

    if (currentLetter === 'A') {
      diamond.push(spacesBefore + currentLetter + spacesBefore);
    } else {
      diamond.push(spacesBefore + currentLetter + spacesBetween + currentLetter + spacesBefore);
    }
  }

  return diamond;
};
