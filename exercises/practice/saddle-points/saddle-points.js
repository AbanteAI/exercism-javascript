//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (grid) => {
  const result = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      let current = grid[row][col];
      let isSaddlePoint = true;

      let current = grid[row][col];
      let isSaddlePoint = true;

      // Check if current element is largest in row
      let largestInRow = true;
      for (let i = 0; i < grid[row].length; i++) {
        if (grid[row][i] > current) {
          largestInRow = false;
          break;
        }
      }

      // Check if current element is smallest in column
      let smallestInColumn = true;
      for (let i = 0; i < grid.length; i++) {
        if (grid[i][col] < current) {
          smallestInColumn = false;
          break;
        }
      }

      if (largestInRow && smallestInColumn) {
        result.push([row, col]);
      }

      if (isSaddlePoint) {
        result.push([row, col]);
      }
    }
  }

  return result;
};
