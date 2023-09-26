//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  const matrix = [];
  let startRow = 0;
  let endRow = size - 1;
  let startCol = 0;
  let endCol = size - 1;
  let counter = 1;

  while (startRow <= endRow && startCol <= endCol) {
    // Top row
    for (let col = startCol; col <= endCol; col++) {
      if (!matrix[startRow]) {
        matrix[startRow] = [];
      }
      matrix[startRow][col] = counter++;
    }
    startRow++;

    // Right column
    for (let row = startRow; row <= endRow; row++) {
      if (!matrix[row]) {
        matrix[row] = [];
      }
      matrix[row][endCol] = counter++;
    }
    endCol--;

    // Bottom row
    for (let col = endCol; col >= startCol; col--) {
      matrix[endRow][col] = counter++;
    }
    endRow--;

    // Left column
    for (let row = endRow; row >= startRow; row--) {
      matrix[row][startCol] = counter++;
    }
    startCol++;
  }

  return matrix;
};
