//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  if (input === '') {
    return '';
  }

  const rows = input.split('\n');
  const maxLength = Math.max(...rows.map(row => row.length));
  const transposed = Array.from({ length: maxLength }, () => '');

  rows.forEach((row, rowIndex) => {
    row.split('').forEach((char, colIndex) => {
      transposed[colIndex] += char.padEnd(maxLength, ' ');
    });
  });

  return transposed.join('\n').trimEnd();
};

  return transposed.join('\n').trimEnd();
};
