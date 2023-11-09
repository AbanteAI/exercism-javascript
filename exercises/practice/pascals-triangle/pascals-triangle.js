//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  const result = [];
  for (let row = 0; row < n; row++) {
    const currentRow = [];
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        currentRow.push(1);
      } else {
        currentRow.push(result[row - 1][col - 1] + result[row - 1][col]);
      }
    }
    result.push(currentRow);
  }
  return result;
};
