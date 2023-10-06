//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numRows) => {
  if (numRows <= 0) {
    return [];
  }

  const triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    const row = [1];
    const prevRow = triangle[i - 1];

    for (let j = 1; j < i; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }

    row.push(1);
    triangle.push(row);
  }

  return triangle;
};
