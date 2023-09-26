//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldData) => {
  const newData = {};
  for (const pointValue in oldData) {
    const letters = oldData[pointValue];
    letters.forEach((letter) => {
      newData[letter.toLowerCase()] = parseInt(pointValue);
    });
  }
  return newData;
};
