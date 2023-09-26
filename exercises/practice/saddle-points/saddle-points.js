//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;

  const saddlePoints = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const value = grid[i][j];
      const maxInRow = Math.max(...grid[i]);
      const minInCol = Math.min(...grid.map(row => row[j]));

      if (value === maxInRow && value === minInCol) {
        saddlePoints.push([i, j]);
      }
    }
  }

  return saddlePoints;
};