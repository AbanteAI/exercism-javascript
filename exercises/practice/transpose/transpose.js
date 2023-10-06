//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  if (input.length === 0) {
    return [];
  }

  const rows = input.split('\n');
  const maxRowLength = Math.max(...rows.map(row => row.length));

  return Array.from({ length: maxRowLength }, (_, i) =>
    rows.map(row => row[i] || ' ').join('')
  );
};

