//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));
  let counter = 1;
  let startRow = 0;
  let endRow = size - 1;
  let startCol = 0;
  let endCol = size - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter++;
    }
    endCol--;

    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        matrix[endRow][i] = counter++;
      }
      endRow--;
    }

    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        matrix[i][startCol] = counter++;
      }
      startCol++;
    }
  }

  return matrix;
};
