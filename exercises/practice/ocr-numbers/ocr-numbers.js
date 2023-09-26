//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NUMBERS = [
  " _ | ||_|",
  "     |  |",
  " _  _||_ ",
  " _  _| _|",
  "   |_|  |",
  " _ |_  _|",
  " _ |_ |_|",
  " _   |  |",
  " _ |_||_|",
  " _ |_| _|"
];

const parseInput = (input) => {
  const lines = input.split('\n');
  if (lines.length % 4 !== 0 || lines.some(line => line.length % 3 !== 0)) {
    throw new Error('Invalid input size');
  }

  const characters = [];
  for (let row = 0; row < lines.length; row += 4) {
    for (let col = 0; col < lines[row].length; col += 3) {
      const character = lines[row].substr(col, 3) +
                        lines[row + 1].substr(col, 3) +
                        lines[row + 2].substr(col, 3);
      characters.push(character);
    }
  }
  return characters;
};

const recognizeNumber = (character) => {
  const index = NUMBERS.indexOf(character);
  return index === -1 ? '?' : index.toString();
};

const convert = (input) => {
  const characters = parseInput(input);
  const numbers = characters.map(recognizeNumber);
  return numbers.join(',');
};
module.exports = { convert };
