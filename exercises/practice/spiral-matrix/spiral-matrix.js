//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  const matrix = new Array(size).fill().map(() => new Array(size).fill(0));

  let value = 1;
  let topRow = 0,
    bottomRow = size - 1,
    leftColumn = 0,
    rightColumn = size - 1;

  while (topRow <= bottomRow && leftColumn <= rightColumn) {
    for (let i = leftColumn; i <= rightColumn; i++) {
      matrix[topRow][i] = value++;
    }
    topRow++;

    for (let i = topRow; i <= bottomRow; i++) {
      matrix[i][rightColumn] = value++;
    }
    rightColumn--;

    if (topRow <= bottomRow) {
      for (let i = rightColumn; i >= leftColumn; i--) {
        matrix[bottomRow][i] = value++;
      }
      bottomRow--;
    }

    if (leftColumn <= rightColumn) {
      for (let i = bottomRow; i >= topRow; i--) {
        matrix[i][leftColumn] = value++;
      }
      leftColumn++;
    }
  }

  return matrix;
};
