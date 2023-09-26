//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(diagram) {
  const rows = diagram.split('\n');
  const rowCount = rows.length;
  if (rowCount === 0) return 0;

  const colCount = rows[0].length;
  let rectangleCount = 0;

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (rows[row][col] === '+') {
        rectangleCount += countRectangles(rows, row, col);
      }
    }
  }

  return rectangleCount;
}
  const rows = diagram.split('\n');
  const rowCount = rows.length;
  if (rowCount === 0) return 0;

  const colCount = rows[0].length;
  let rectangleCount = 0;

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (rows[row][col] === '+') {
        rectangleCount += countRectangles(rows, row, col);
      }
    }
  }

  return rectangleCount;
}

function countRectangles(rows, startRow, startCol) {
  const rowCount = rows.length;
  const colCount = rows[0].length;
  let rectangleCount = 0;

  for (let row = startRow + 1; row < rowCount; row++) {
    if (rows[row][startCol] !== '|') break;

    for (let col = startCol + 1; col < colCount; col++) {
      if (rows[startRow][col] !== '-') break;

      if (rows[row][col] === '+') {
        const isRectangle = checkRectangle(rows, startRow, startCol, row, col);
        if (isRectangle) rectangleCount++;
      }
    }
  }

  return rectangleCount;
}

function checkRectangle(rows, startRow, startCol, endRow, endCol) {
  for (let row = startRow + 1; row < endRow; row++) {
    if (rows[row][startCol] !== '|') return false;
    if (rows[row][endCol] !== '|') return false;
  }

  for (let col = startCol + 1; col < endCol; col++) {
    if (rows[startRow][col] !== '-') return false;
    if (rows[endRow][col] !== '-') return false;
  }

  return true;
}
