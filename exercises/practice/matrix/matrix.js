//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixString) {
    this.matrix = matrixString.split('\n').map(row => row.split(' ').map(Number));
  }
  }

  get rows() {
    return this.matrix;
14:  };
  }
  get columns() {
    return this.rows[0].map((_, i) => this.rows.map(row => row[i]));
  }
}
