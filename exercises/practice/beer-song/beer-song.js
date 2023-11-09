//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (initialBottlesCount, takeDownCount) => {
  const lines = [];
  let currentBottles = initialBottlesCount;

  for (let i = 0; i < takeDownCount; i++) {
    if (currentBottles > 2) {
      lines.push(`${currentBottles} bottles of beer on the wall, ${currentBottles} bottles of beer.`);
      lines.push(`Take one down and pass it around, ${currentBottles - 1} bottles of beer on the wall.`);
    } else if (currentBottles === 2) {
      lines.push(`${currentBottles} bottles of beer on the wall, ${currentBottles} bottles of beer.`);
      lines.push(`Take one down and pass it around, ${currentBottles - 1} bottle of beer on the wall.`);
    } else if (currentBottles === 1) {
      lines.push(`${currentBottles} bottle of beer on the wall, ${currentBottles} bottle of beer.`);
      lines.push(`Take it down and pass it around, no more bottles of beer on the wall.`);
    } else {
      lines.push(`No more bottles of beer on the wall, no more bottles of beer.`);
      lines.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
    }

    if (i < takeDownCount - 1) {
      lines.push('');
    }

    currentBottles--;
  }

  return lines;
};
};
