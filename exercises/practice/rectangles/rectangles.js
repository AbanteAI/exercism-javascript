//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(diagram) {
  let count = 0;
  const rows = diagram.split("\n").filter((row) => row.trim() !== "");
  const numRows = rows.length;
  const numCols = rows[0].length;

  for (let rowStart = 0; rowStart < numRows; rowStart++) {
    for (let colStart = 0; colStart < numCols; colStart++) {
      for (let rowEnd = rowStart + 1; rowEnd <= numRows; rowEnd++) {
        for (let colEnd = colStart + 1; colEnd <= numCols; colEnd++) {
          if (isRectangle(rows, rowStart, colStart, rowEnd, colEnd)) {
            count++;
          }
        }
      }
    }
  }

  return count;
}

function isRectangle(rows, rowStart, colStart, rowEnd, colEnd) {
  for (let row = rowStart; row < rowEnd; row++) {
    for (let col = colStart; col < colEnd; col++) {
      if (rows[row][col] !== "+") {
        return false;
      }
    }
  }

  return true;
}
