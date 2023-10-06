//
// This is only a SKELETON file for the 'Rectangles' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function count(diagram) {
  let count = 0;

  for (let i = 0; i < diagram.length; i++) {
    for (let j = 0; j < diagram[i].length; j++) {
      if (diagram[i][j] === '+') {
        count += findRectangles(diagram, i, j);
      }
    }
  }

  return count;
}

function findRectangles(diagram, i, j) {
  let count = 0;

  for (let k = i + 1; k < diagram.length; k++) {
    if (diagram[k][j] === '+') {
      const width = j - diagram[i].indexOf('|', j) + 1;
      const height = k - i + 1;

      if (isRectangle(diagram, i, j, width, height)) {
        count++;
      }
    }
  }

  return count;
}

function isRectangle(diagram, i, j, width, height) {
  for (let row = i + 1; row < i + height - 1; row++) {
    if (diagram[row][j] !== '|') {
      return false;
    }

    if (diagram[row][j + width - 1] !== '|') {
      return false;
    }
  }

  const topLine = diagram[i].slice(j, j + width);
  const bottomLine = diagram[i + height - 1].slice(j, j + width);

  return topLine === '+' + '-'.repeat(width - 2) + '+' &&
         bottomLine === '+' + '-'.repeat(width - 2) + '+';
}
