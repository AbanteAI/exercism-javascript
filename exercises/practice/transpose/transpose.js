//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  const maxLength = Math.max(...input.map(row => row.length));
  const result = [];

  for (let i = 0; i < maxLength; i++) {
    let newRow = "";
    for (let j = 0; j < input.length; j++) {
      newRow += input[j][i] || " ";
    }
    result.push(newRow.trimEnd());
  }

  return result;
};
