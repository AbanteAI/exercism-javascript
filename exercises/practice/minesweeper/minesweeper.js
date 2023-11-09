//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  if (input.length === 0) return [];

  const rows = input.length;
  const cols = input[0].length;
  const output = input.map(row => row.split(''));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (output[row][col] === '*') continue;

      let count = 0;
      for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
          if (r >= 0 && r < rows && c >= 0 && c < cols && input[r][c] === '*') {
            count++;
          }
        }
      }

      output[row][col] = count > 0 ? count.toString() : ' ';
    }
  }

  return output.map(row => row.join(''));
};
