//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.matrix = this.parseMatrixString(matrixString);
  }

  parseMatrixString(matrixString) {
    return matrixString.split('\n').map(row => row.split(' ').map(Number));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    const numColumns = this.matrix[0].length;
    const columns = [];

    for (let i = 0; i < numColumns; i++) {
      const column = this.matrix.map(row => row[i]);
      columns.push(column);
    }

    return columns;
  }
}
