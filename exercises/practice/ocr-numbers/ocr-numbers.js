//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

module.exports.convert = () => {
const isInputSizeCorrect = (input) => {
  const rows = input.split('\n');
  return rows.length % 4 === 0 && rows.every(row => row.length % 3 === 0);
};

const recognizeDigit = (digit) => {
  const digits = [
    ' _ | ||_|   ',
    '     |  |   ',
    ' _  _||_    ',
    ' _  _| _|   ',
    '   |_|  |   ',
    ' _ |_  _|   ',
    ' _ |_ |_|   ',
    ' _   |  |   ',
    ' _ |_||_|   ',
    ' _ |_| _|   '
  ];
  const index = digits.indexOf(digit);
  return index === -1 ? '?' : index.toString();
};

module.exports.convert = (input) => {
  if (!isInputSizeCorrect(input)) {
    throw new Error('Invalid input size');
  }

  const rows = input.split('\n');
  const result = [];

  for (let i = 0; i < rows.length; i += 4) {
    const rowDigits = [];
    for (let j = 0; j < rows[i].length; j += 3) {
      const digit = rows[i].substr(j, 3) + rows[i + 1].substr(j, 3) + rows[i + 2].substr(j, 3) + rows[i + 3].substr(j, 3);
      rowDigits.push(recognizeDigit(digit));
    }
    result.push(rowDigits.join(''));
  }

  return result.join(',');
};
  throw new Error('Remove this statement and implement this function');
};
