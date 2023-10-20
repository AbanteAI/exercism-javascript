//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  const matrix = Array(size).fill().map(() => Array(size).fill(0));
  let num = 1;
  let row = 0;
  let col = 0;
  let direction = 'right';

  while (num <= size * size) {
    matrix[row][col] = num;
    num++;

    if (direction === 'right') {
      if (col + 1 < size && matrix[row][col + 1] === 0) {
        col++;
      } else {
        direction = 'down';
        row++;
      }
    } else if (direction === 'down') {
      if (row + 1 < size && matrix[row + 1][col] === 0) {
        row++;
      } else {
        direction = 'left';
        col--;
      }
    } else if (direction === 'left') {
      if (col - 1 >= 0 && matrix[row][col - 1] === 0) {
        col--;
      } else {
        direction = 'up';
        row--;
      }
    } else if (direction === 'up') {
      if (row - 1 >= 0 && matrix[row - 1][col] === 0) {
        row--;
      } else {
        direction = 'right';
        col++;
      }
    }
  }

  return matrix;
};
