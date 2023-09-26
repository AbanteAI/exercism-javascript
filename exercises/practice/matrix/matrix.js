//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.matrix = matrixString.split('\n').map(row => row.split(' ').map(Number));
    ;
  }
  }

  get rows() {
  get rows() {
    return this.matrix;
  }

  get columns() {
  get columns() {
    const columnCount = this.matrix[0].length;
    const columns = Array.from({ length: columnCount }, () => []);
    this.matrix.forEach(row => {
      row.forEach((value, columnIndex) => {
        columns[columnIndex].push(value);
      });
    });
    return columns;
  }
}
