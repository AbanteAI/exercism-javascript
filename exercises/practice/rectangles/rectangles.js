//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(input) {
  let rows = input.length;
  if (rows === 0 || cols === 0) return 0;
  let cols = input[0].length;
  let count = 0;

  for (let y1 = 0; y1 < rows; y1++) {
    for (let x1 = 0; x1 < cols; x1++) {
      for (let y2 = y1 + 1; y2 < rows; y2++) {
        for (let x2 = x1 + 1; x2 < cols; x2++) {
          if (
            input[y1][x1] === '+' &&
            input[y1][x2] === '+' &&
            input[y2][x1] === '+' &&
            input[y2][x2] === '+'
          ) {
            count++;
          }
        }
      }
    }
  }

  return count;
}
