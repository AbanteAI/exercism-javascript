//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (grid) => {
  const rows = grid.length;
  if (rows === 0) return [];

  const columns = grid[0].length;
  const saddlePoints = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const currentHeight = grid[row][col];

      const isRowMax = grid[row].every((height) => height <= currentHeight);
      const isColMin = grid.every((row) => row[col] >= currentHeight);

      if (isRowMax && isColMin) {
        saddlePoints.push({ row, column: col });
      }
    }
  }

  return saddlePoints;
};
