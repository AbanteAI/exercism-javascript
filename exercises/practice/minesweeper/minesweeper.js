//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  const height = input.length;
  const width = input[0] && input[0].length;
  const directions = [
    { dx: -1, dy: -1 }, { dx: 0, dy: -1 }, { dx: 1, dy: -1 },
    { dx: -1, dy: 0 },                     { dx: 1, dy: 0 },
    { dx: -1, dy: 1 },  { dx: 0, dy: 1 },  { dx: 1, dy: 1 }
  ];

  const countMines = (x, y) => {
    return directions.reduce((count, { dx, dy }) => {
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < width && newY >= 0 && newY < height) {
        return count + (input[newY][newX] === '*' ? 1 : 0);
      }
      return count;
    }, 0);
  };

  return input.map((row, y) => {
    return [...row].map((cell, x) => {
      if (cell === ' ') {
        const mines = countMines(x, y);
        return mines > 0 ? mines.toString() : ' ';
      }
      return cell;
    }).join('');
  });
};
