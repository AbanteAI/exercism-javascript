//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const saddlePoints = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const current = matrix[i][j];
      let isSaddlePoint = true;

      for (let k = 0; k < rows; k++) {
        if (current < Math.max(...matrix[k].slice(j, j + 1))) {
          isSaddlePoint = false;
          break;
        }
      }

      for (let k = 0; k < cols; k++) {
        if (current > Math.min(...matrix.map(row => row[k]).slice(i, i + 1))) {
          isSaddlePoint = false;
          break;
        }
      }

      if (isSaddlePoint) {
        saddlePoints.push([i, j]);
      }
    }
  }

    }
  }

  return saddlePoints;
};

