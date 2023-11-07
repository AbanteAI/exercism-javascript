//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (initialBottlesCount, takeDownCount) => {
  let verses = [];
  for (let i = initialBottlesCount; i > initialBottlesCount - takeDownCount; i--) {
    let currentBottles = i;
    let nextBottles = i - 1;
    let currentBottlesText = currentBottles === 1 ? "bottle" : "bottles";
    let nextBottlesText = nextBottles === 1 ? "bottle" : "bottles";

    if (currentBottles > 1) {
      verses.push(
        `${currentBottles} ${currentBottlesText} of beer on the wall, ${currentBottles} ${currentBottlesText} of beer.`,
        `Take one down and pass it around, ${nextBottles === 0 ? "no more" : nextBottles} ${nextBottlesText} of beer on the wall.`,
        ''
      );
    } else if (currentBottles === 1) {
      verses.push(
        `1 bottle of beer on the wall, 1 bottle of beer.`,
        `Take it down and pass it around, no more bottles of beer on the wall.`,
        ''
      );
    } else {
      verses.push(
        `No more bottles of beer on the wall, no more bottles of beer.`,
        `Go to the store and buy some more, 99 bottles of beer on the wall.`
      );
    }
  }
  return verses.join('\n');
};
