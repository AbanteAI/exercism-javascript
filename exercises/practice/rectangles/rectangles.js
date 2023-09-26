//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(diagram) {
  let count = 0;
  for (let i = 0; i < diagram.length; i++) {
    for (let j = 0; j < diagram[i].length; j++) {
      if (diagram[i][j] === "+") {
        if (isRectangle(diagram, i, j)) {
          count++;
        }
      }
    }
  }
  return count;
}

function isRectangle(diagram, row, col) {
  if (row === diagram.length - 1 || col === diagram[row].length - 1) {
    return false;
  }
  if (diagram[row][col + 1] !== "+" || diagram[row + 1][col] !== "+") {
    return false;
  }
  let width = 1;
  let height = 1;
  while (diagram[row][col + width] === "-") {
    width++;
  }
  while (diagram[row + height][col] === "|") {
    height++;
  }
  for (let i = row + 1; i < row + height; i++) {
    for (let j = col + 1; j < col + width; j++) {
      if (diagram[i][j] !== " ") {
        return false;
      }
    }
  }
  return true;
}
