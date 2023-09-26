//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(input) {
  const grid = parseDiagram(input);
  return countRectangles(grid);
}

function parseDiagram(input) {
  return input.trim().split('\n').map((line) => line.split(''));
}
}

function parseDiagram(input) {
  return input.split('\n').map((line) => line.split(''));
}

function countRectangles(grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '+') {
        count += countRectanglesFromStartPoint(grid, row, col);
      }
    }
  }

  return count;
}

function countRectanglesFromStartPoint(grid, startRow, startCol) {
  let count = 0;

  for (let row = startRow + 1; row < grid.length; row++) {
    if (grid[row][startCol] === '+') {
      for (let col = startCol + 1; col < grid[row].length; col++) {
        if (grid[row][col] === '+') {
          if (isRectangle(grid, startRow, startCol, row, col)) {
            count++;
          }
        } else {
          break;
        }
      }
    } else {
      break;
    }
  }

  return count;
}

function isRectangle(grid, startRow, startCol, endRow, endCol) {
  for (let row = startRow; row <= endRow; row++) {
    for (let col = startCol; col <= endCol; col++) {
      if (grid[row][col] !== '+') {
        return false;
      }
    }
  }

  return true;
}
