//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  // Check if input is empty
  if (input.length === 0) {
    return [];
  }

  // Get the number of rows and columns
  const numRows = input.length;
  const numCols = Math.max(...input.map(row => row.length));

  // Create the transposed matrix
  const transposed = [];
  for (let col = 0; col < numCols; col++) {
    const newRow = [];
    for (let row = 0; row < numRows; row++) {
      newRow.push(input[row][col] || ' ');
    }
    transposed.push(newRow);
  }

  return transposed;
};
