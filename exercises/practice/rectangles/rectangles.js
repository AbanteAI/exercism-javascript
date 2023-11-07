//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(diagram) {
  if (!diagram || diagram.length === 0 || !diagram[0]) {
    return 0;
  }
  const rows = diagram.length;
  const cols = diagram[0].length;
  let rectangleCount = 0;

  // Helper function to check if a corner exists at a given position
  function isCorner(x, y) {
    return diagram[x][y] === '+';
  }

  // Helper function to check if a line exists between two corners horizontally
  function checkHorizontalLine(x, y1, y2) {
    for (let y = y1 + 1; y < y2; y++) {
      if (diagram[x][y] !== '-' && diagram[x][y] !== '+') {
        return false;
      }
    }
    return true;
  }

  // Helper function to check if a line exists between two corners vertically
  function checkVerticalLine(y, x1, x2) {
    for (let x = x1 + 1; x < x2; x++) {
      if (diagram[x][y] !== '|' && diagram[x][y] !== '+') {
        return false;
      }
    }
    return true;
  }

  // Iterate through the diagram to find top left corners of rectangles
  for (let x1 = 0; x1 < rows; x1++) {
    for (let y1 = 0; y1 < cols; y1++) {
      if (isCorner(x1, y1)) {
        // For each top left corner, look for the bottom right corner
        for (let x2 = x1 + 1; x2 < rows; x2++) {
          for (let y2 = y1 + 1; y2 < cols; y2++) {
            if (isCorner(x2, y2) &&
                isCorner(x1, y2) &&
                isCorner(x2, y1) &&
                checkHorizontalLine(x1, y1, y2) &&
                checkHorizontalLine(x2, y1, y2) &&
                checkVerticalLine(y1, x1, x2) &&
                checkVerticalLine(y2, x1, x2)) {
              rectangleCount++;
            }
          }
        }
      }
    }
  }

  return rectangleCount;
}
