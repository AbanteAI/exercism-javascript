//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (input) => {
  const ocrNumbers = [
    [' _ ', '| |', '|_|', '   '],
    ['   ', '  |', '  |', '   '],
    [' _ ', ' _|', '|_ ', '   '],
    [' _ ', ' _|', ' _|', '   '],
    ['   ', '|_|', '  |', '   '],
    [' _ ', '|_ ', ' _|', '   '],
    [' _ ', '|_ ', '|_|', '   '],
    [' _ ', '  |', '  |', '   '],
    [' _ ', '|_|', '|_|', '   '],
    [' _ ', '|_|', ' _|', '   '],
  ];

  const lines = input.split('\n');
  if (lines.length % 4 !== 0) {
    throw new Error('Invalid input');
  }

  const result = [];
  for (let i = 0; i < lines.length; i += 4) {
    const line1 = lines[i];
    const line2 = lines[i + 1];
    const line3 = lines[i + 2];
    const line4 = lines[i + 3];

    if (line1.length !== line2.length || line1.length !== line3.length || line1.length !== line4.length) {
      throw new Error('Invalid input');
    }

    let ocrNumber = '';
    for (let j = 0; j < line1.length; j += 3) {
      const ocrDigit = line1.slice(j, j + 3) + line2.slice(j, j + 3) + line3.slice(j, j + 3) + line4.slice(j, j + 3);
      const index = ocrNumbers.findIndex((digit) => digit.join('') === ocrDigit);
      ocrNumber += index === -1 ? '?' : index;
    }

    result.push(ocrNumber);
  }

  return result.join(',');
};
