//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  if (input.length === 0) return [];
  const rows = input.length;
  const columns = input[0].length;
  const result = input.map(row => row.split(''));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (result[i][j] === ' ') {
        let count = 0;
        for (let x = i - 1; x <= i + 1; x++) {
          for (let y = j - 1; y <= j + 1; y++) {
            if (x >= 0 && x < rows && y >= 0 && y < columns && input[x][y] === '*') {
              count++;
            }
          }
        }
        result[i][j] = count > 0 ? count.toString() : ' ';
      }
    }
  }

  return result.map(row => row.join(''));
};
