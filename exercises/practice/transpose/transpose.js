//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  if (typeof input !== 'string') {
    input = String(input);
  }
  
  const rows = input.split('\n');
  const maxLength = Math.max(...rows.map(row => row.length));
  const transposed = [];

  for (let i = 0; i < maxLength; i++) {
    let newRow = '';
    for (let j = 0; j < rows.length; j++) {
      newRow += rows[j][i] || ' ';
    }
    transposed.push(newRow);
  }

  return transposed.join('\n');
};
  const transposed = [];

  for (let i = 0; i < maxLength; i++) {
    let newRow = '';
    for (let j = 0; j < rows.length; j++) {
      newRow += rows[j][i] || ' ';
    }
    transposed.push(newRow);
  }

  return transposed.join('\n');
};
