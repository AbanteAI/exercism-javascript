//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));
  let num = 1;
  let row = 0;
  let col = 0;
  let dir = 0;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  for (let i = 0; i < size * size; i++) {
    matrix[row][col] = num++;
    const nextRow = row + directions[dir][0];
    const nextCol = col + directions[dir][1];

    if (
      nextRow < 0 ||
      nextRow >= size ||
      nextCol < 0 ||
      nextCol >= size ||
      matrix[nextRow][nextCol] !== 0
    ) {
      dir = (dir + 1) % 4;
    }

    row += directions[dir][0];
    col += directions[dir][1];
  }

  return matrix;
};
