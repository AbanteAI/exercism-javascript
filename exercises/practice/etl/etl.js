//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldScoring) => {
  const newScoring = {};

  for (const [score, letters] of Object.entries(oldScoring)) {
    for (const letter of letters) {
      newScoring[letter.toLowerCase()] = Number(score);
    }
  }

  return newScoring;
};
