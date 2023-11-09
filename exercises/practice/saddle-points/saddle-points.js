//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (matrix) => {
  const result = [];

  for (let row = 0; row < matrix.length; row++) {
    const maxInRow = Math.max(...matrix[row]);

    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === maxInRow) {
        const minInCol = Math.min(...matrix.map((r) => r[col]));

        if (matrix[row][col] === minInCol) {
          result.push({ row: row + 1, column: col + 1 });
        }
      }
    }
  }

  return result;
};
