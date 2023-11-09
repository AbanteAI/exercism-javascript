//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldData) => {
  const newData = {};
  for (const [point, letters] of Object.entries(oldData)) {
    for (const letter of letters) {
      newData[letter.toLowerCase()] = parseInt(point);
    }
  }
  return newData;
};
