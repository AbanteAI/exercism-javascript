//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.matrixArray = this.parseMatrix(matrixString);
  }
  parseMatrix(matrixString) {
    return matrixString.split('\n').map(row => row.split(' ').map(Number));
  }

  get rows() {
    return this.matrixArray;
  }

  get columns() {
    return this.matrixArray[0].map((_, colIndex) => this.matrixArray.map(row => row[colIndex]));
  }
}
