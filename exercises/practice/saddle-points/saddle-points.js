//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (matrix) => {
  const saddlePoints = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const value = matrix[i][j];
      const rowMax = Math.max(...matrix[i]);
      const colMin = Math.min(...matrix.map(row => row[j]));

      if (value === rowMax && value === colMin) {
        saddlePoints.push([i, j]);
      }
    }
  }

  return saddlePoints;
};
};
