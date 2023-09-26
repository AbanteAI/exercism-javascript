//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (grid) => {
  const saddlePoints = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const point = [row, col];
      if (isSaddlePoint(grid, point)) {
        saddlePoints.push(point);
      }
    }
  }

  return saddlePoints;
};

const isSaddlePoint = (grid, point) => {
  const [row, col] = point;
  const value = grid[row][col];

  // Check if the value is the largest in its row
  const rowValues = grid[row];
  const maxRowValue = Math.max(...rowValues);
  if (value !== maxRowValue) {
    return false;
  }

  // Check if the value is the smallest in its column
  const columnValues = grid.map((row) => row[col]);
  const minColumnValue = Math.min(...columnValues);
  if (value !== minColumnValue) {
    return false;
  }

  return true;
};

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const point = [row, col];
      if (isSaddlePoint(grid, point)) {
        saddlePoints.push(point);
      }
    }
  }

  return saddlePoints;
};

const isSaddlePoint = (grid, point) => {
  const [row, col] = point;
  const value = grid[row][col];

  // Check if the value is the largest in its row
  const rowValues = grid[row];
  const maxRowValue = Math.max(...rowValues);
  if (value !== maxRowValue) {
    return false;
  }

  // Check if the value is the smallest in its column
  const columnValues = grid.map((row) => row[col]);
  const minColumnValue = Math.min(...columnValues);
  if (value !== minColumnValue) {
    return false;
  }

  return true;
};
