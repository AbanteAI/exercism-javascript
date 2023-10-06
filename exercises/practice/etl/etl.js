//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldScores) => {
  let newScores = {};
  for (let score in oldScores) {
    let letters = oldScores[score];
    for (let i = 0; i < letters.length; i++) {
      newScores[letters[i].toLowerCase()] = Number(score);
    }
  }
  return newScores;
};
