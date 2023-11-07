//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix.push(new Array(size));
  }

  let num = 1;
  let startCol = 0;
  let endCol = size - 1;
  let startRow = 0;
  let endRow = size - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = num++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = num++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = num++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = num++;
    }
    startCol++;
  }

  return matrix;
};
