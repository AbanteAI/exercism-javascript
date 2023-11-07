//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (matrix) => {
  const saddlePoints = [];
  const rowMaxes = matrix.map(row => Math.max(...row));
  const colMins = matrix[0].map((_, colIndex) => Math.min(...matrix.map(row => row[colIndex])));

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    for (let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++) {
      if (
        matrix[rowIndex][colIndex] === rowMaxes[rowIndex] &&
        matrix[rowIndex][colIndex] === colMins[colIndex]
      ) {
        saddlePoints.push({ row: rowIndex + 1, column: colIndex + 1 });
      }
    }
  }

  return saddlePoints;
};
