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
    return this.transposeMatrix(this.matrix);
  }
  }

  get columns() {
    return this.transposeMatrix(this.matrix);
  }

  transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  }
}
