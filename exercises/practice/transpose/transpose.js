//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (inputText) => {
  const rows = inputText.split('\n');
  const maxLength = Math.max(...rows.map(row => row.length));

  const transposed = Array.from({ length: maxLength }, () => []);

  rows.forEach((row, rowIndex) => {
    row.split('').forEach((char, colIndex) => {
      transposed[colIndex][rowIndex] = char;
    });
  });

  return transposed.map(row => row.join('')).join('\n');
};
  const rows = inputText.split('\n');
  const maxLength = Math.max(...rows.map(row => row.length));

  const transposed = Array.from({ length: maxLength }, () => []);

  rows.forEach((row, rowIndex) => {
    row.split('').forEach((char, colIndex) => {
      transposed[colIndex][rowIndex] = char;
    });
  });

  return transposed.map(row => row.join('')).join('\n');
};
