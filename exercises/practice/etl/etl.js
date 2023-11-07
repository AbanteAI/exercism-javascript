//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  const newScoreFormat = {};
  for (const [score, letters] of Object.entries(old)) {
    letters.forEach(letter => {
      newScoreFormat[letter.toLowerCase()] = parseInt(score);
    });
  }
  return newScoreFormat;
};
