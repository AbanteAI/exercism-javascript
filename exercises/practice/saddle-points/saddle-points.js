//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (matrix) => {
  const saddlePoints = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const current = matrix[row][col];
      const rowMax = Math.max(...matrix[row]);
      const colMin = Math.min(...matrix.map((r) => r[col]));

      if (current === rowMax && current === colMin) {
        saddlePoints.push({ row: row + 1, column: col + 1 });
      }
    }
  }

  return saddlePoints;
};
