//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (initialBottlesCount, takeDownCount) => {
  let lyrics = [];

  for (let i = 0; i < takeDownCount; i++) {
    let currentBottles = initialBottlesCount - i;
    let nextBottles = currentBottles - 1;

    lyrics.push(`${currentBottles === 1 ? '1 bottle' : currentBottles + ' bottles'} of beer on the wall, ${currentBottles === 1 ? '1 bottle' : currentBottles + ' bottles'} of beer.`);
    lyrics.push(`Take ${currentBottles === 1 ? 'it' : 'one'} down and pass it around, ${nextBottles === 0 ? 'no more' : nextBottles === 1 ? '1 bottle' : nextBottles + ' bottles'} of beer on the wall.`);

    if (i < takeDownCount - 1) {
      lyrics.push('');
    }
  }

  return lyrics;
};
