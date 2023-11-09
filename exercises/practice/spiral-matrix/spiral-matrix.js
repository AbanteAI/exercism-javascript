//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  const matrix = Array.from({ length: size }, () => Array.from({ length: size }, () => 0));
  let counter = 1;
  let rowStart = 0;
  let rowEnd = size - 1;
  let colStart = 0;
  let colEnd = size - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    for (let col = colStart; col <= colEnd; col++) {
      matrix[rowStart][col] = counter++;
    }
    rowStart++;

    for (let row = rowStart; row <= rowEnd; row++) {
      matrix[row][colEnd] = counter++;
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      for (let col = colEnd; col >= colStart; col--) {
        matrix[rowEnd][col] = counter++;
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      for (let row = rowEnd; row >= rowStart; row--) {
        matrix[row][colStart] = counter++;
      }
      colStart++;
    }
  }

  return matrix;
};
