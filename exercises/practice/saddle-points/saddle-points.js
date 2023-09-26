//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (grid) => {
  const numRows = grid.length;
  const numCols = grid[0].length;
  const result = [];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const currentValue = grid[row][col];
      const rowMax = Math.max(...grid[row]);
      const colMin = Math.min(...grid.map(r => r[col]));

      if (currentValue === rowMax && currentValue === colMin) {
        result.push({ row: row + 1, column: col + 1 });
      }
    }
  }

  return result;
};
