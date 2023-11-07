//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const NUMBERS = [
  " _ | ||_|   ",
  "     |  |   ",
  " _  _||_    ",
  " _  _| _|   ",
  "   |_|  |   ",
  " _ |_  _|   ",
  " _ |_ |_|   ",
  " _   |  |   ",
  " _ |_||_|   ",
  " _ |_| _|   "
];

export const convert = (input) => {
  // Split the input into lines.
  const lines = input.split("\n");
  if (lines.length % 4 !== 0 || lines.some(line => line.length % 3 !== 0)) {
    throw new Error('Input has a wrong size');
  }

  let result = '';
  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 4) {
    const currentLines = lines.slice(lineIndex, lineIndex + 4);
    let currentResult = '';
    
    for (let columnIndex = 0; columnIndex < currentLines[0].length; columnIndex += 3) {
      const numberString = currentLines.map(line => line.substring(columnIndex, columnIndex + 3)).join('');
      const numberIndex = NUMBERS.indexOf(numberString);
      currentResult += numberIndex >= 0 ? numberIndex.toString() : '?';
    }
    
    result += (lineIndex > 0 ? ',' : '') + currentResult;
  }

  return result;
};
