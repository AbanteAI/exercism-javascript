//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  const rows = input.length;
  const cols = input[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    let row = '';
    for (let j = 0; j < cols; j++) {
      if (input[i][j] === ' ') {
        let count = 0;
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (i + x >= 0 && i + x < rows && j + y >= 0 && j + y < cols && input[i + x][j + y] === '*') {
              count++;
            }
          }
        }
        row += count === 0 ? ' ' : count.toString();
      } else {
        row += input[i][j];
      }
    }
    result.push(row);
  }

  return result;
};
