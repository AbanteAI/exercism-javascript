//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(input) {
  let rowCount = input.length;
  if (rowCount === 0) {
    return 0;
  }
  let colCount = input[0].length;
  let corners = [];
  let rectangles = 0;

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (input[row][col] === '+') {
        corners.push([row, col]);
      }
    }
  }

  for (let i = 0; i < corners.length; i++) {
    for (let j = i + 1; j < corners.length; j++) {
      let [row1, col1] = corners[i];
      let [row2, col2] = corners[j];

      if (row1 < row2 && col1 < col2) {
        let isRectangle = true;

        for (let row = row1; row <= row2; row++) {
          if (input[row][col1] !== '+' && input[row][col2] !== '+') {
            isRectangle = false;
            break;
          }
        }

        for (let col = col1; col <= col2; col++) {
          if (input[row1][col] !== '+' && input[row2][col] !== '+') {
            isRectangle = false;
            break;
          }
        }

        if (isRectangle) {
          rectangles++;
        }
      }
    }
  }

  return rectangles;
}
