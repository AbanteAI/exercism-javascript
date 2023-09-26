//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (initialBottlesCount, takeDownCount) => {
  let lyrics = [];

  for (let i = 0; i < takeDownCount; i++) {
    const bottles = initialBottlesCount - i;
    const nextBottles = bottles - 1;
    const currentBottles = bottles === 1 ? '1 bottle' : `${bottles} bottles`;
    const nextBottlesText = nextBottles === 0 ? 'no more bottles' : (nextBottles === 1 ? '1 bottle' : `${nextBottles} bottles`);

    lyrics.push(`${currentBottles} of beer on the wall, ${currentBottles.toLowerCase()} of beer.`);
    lyrics.push(bottles === 1 ? 'Take it down and pass it around, no more bottles of beer on the wall.' : `Take one down and pass it around, ${nextBottlesText} of beer on the wall.`);
  }

  if (initialBottlesCount - takeDownCount === 0) {
    lyrics.push('No more bottles of beer on the wall, no more bottles of beer.');
    lyrics.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
  }

  return lyrics;
};
};
