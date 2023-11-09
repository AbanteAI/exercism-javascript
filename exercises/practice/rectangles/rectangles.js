//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(diagram) {
  let rectangles = 0;

  for (let row = 0; row < diagram.length - 1; row++) {
    for (let col = 0; col < diagram[row].length - 1; col++) {
      if (diagram[row][col] === "+") {
        for (let row2 = row + 1; row2 < diagram.length; row2++) {
          if (diagram[row2][col] === "+") {
            for (let col2 = col + 1; col2 < diagram[row].length; col2++) {
              if (diagram[row][col2] === "+" && diagram[row2][col2] === "+") {
                if (isRectangle(diagram, row, col, row2, col2)) {
                  rectangles++;
                }
              }
            }
          }
        }
      }
    }
  }

  return rectangles;
}

function isRectangle(diagram, row1, col1, row2, col2) {
  for (let row = row1; row <= row2; row++) {
    for (let col = col1; col <= col2; col++) {
      if (row === row1 || row === row2) {
        if (col === col1 || col === col2) {
          if (diagram[row][col] !== "+") {
            return false;
          }
        } else {
          if (diagram[row][col] === "-") {
            return false;
          }
        }
      } else {
        if (col === col1 || col === col2) {
          if (diagram[row][col] === "|") {
            return false;
          }
        } else {
          if (diagram[row][col] !== " " && diagram[row][col] !== "+") {
            return false;
          }
        }
      }
    }
  }

  return true;
}
