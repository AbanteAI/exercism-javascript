//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  // Find the maximum length of a row in the input
  const maxLength = Math.max(...input.map(row => row.length));
  
  // Initialize an array to hold the transposed array of strings
  let transposed = [];

  // Loop through each column index up to the maximum length
  for (let col = 0; col < maxLength; col++) {
    // Map each row into its character at the current column index or a space if undefined
    // Then reverse to pad spaces to the left and join to form the transposed row
    let transposedRow = input.map(row => row[col] || ' ').reverse().join('');
    // Trim the end of the row to remove excess spaces
    transposedRow = transposedRow.trimEnd();
    // Reverse again to restore the original order and add to the transposed array
    transposed.push(transposedRow.split('').reverse().join(''));
  }

  return transposed;
};
