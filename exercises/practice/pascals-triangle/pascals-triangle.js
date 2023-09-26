//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numRows) => {
  const result = [];

  for (let row = 0; row < numRows; row++) {
    const newRow = [];
    newRow[0] = 1;
    newRow[row] = 1;

    for (let col = 1; col < row; col++) {
      newRow[col] = result[row - 1][col - 1] + result[row - 1][col];
    }

    result.push(newRow);
  }

  return result;
};
