//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numRows) => {
  if (numRows < 0) {
    throw new Error("Number of rows must be non-negative");
  }

  const triangle = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];
    row[0] = 1;
    row[i] = 1;

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle;
};
