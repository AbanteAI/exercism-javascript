//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numberOfRows) => {
  if (numberOfRows === 0) return [];
  const triangle = [[1]];
  
  for (let row = 1; row < numberOfRows; row++) {
    const newRow = [1];
    const prevRow = triangle[row - 1];
    
    for (let col = 1; col < row; col++) {
      newRow[col] = prevRow[col - 1] + (prevRow[col] || 0);
    }
    
    newRow.push(1);
    triangle.push(newRow);
  }
  
  return triangle;
};
