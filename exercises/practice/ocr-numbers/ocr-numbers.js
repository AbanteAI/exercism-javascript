//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (input) => {
  // Step One: Convert a simple binary font to a string containing 0 or 1
  const simpleFont = {
    ' _ | ||_|   ': '0',
    '     |  |   ': '1',
    ' _  _||_    ': '2',
    ' _  _| _|   ': '3',
    '   |_|  |   ': '4',
    ' _ |_  _|   ': '5',
    ' _ |_ |_|   ': '6',
    ' _   |  |   ': '7',
    ' _ |_||_|   ': '8',
    ' _ |_| _|   ': '9',
  };

  const convertSimpleFont = (font) => {
    return simpleFont[font] || '?';
  };

  // Step Two: Handle multi-character binary strings and replace garbled numbers with '?'
  const convertMultiCharacter = (input) => {
    const lines = input.split('\n');
    const result = [];
    for (let i = 0; i < lines.length; i += 4) {
      const number = [];
      for (let j = 0; j < 3; j++) {
        number.push(lines[i + j].substring(0, 3));
      }
      result.push(number.join(''));
    }
    return result.map((num) => convertSimpleFont(num)).join('');
  };

  // Step Three: Recognize all numbers 0 through 9, both individually and as part of a larger string
  const convertNumbers = (input) => {
    const numbers = input.match(/.{9}/g);
    return numbers.map((num) => convertSimpleFont(num)).join('');
  };

  // Step Four: Handle multiple numbers, one per line, and join the lines with commas
  const convertMultipleNumbers = (input) => {
    const lines = input.split('\n');
    const result = [];
    for (let i = 0; i < lines.length; i += 4) {
      const number = [];
      for (let j = 0; j < 3; j++) {
        number.push(lines[i + j].substring(0, 3));
      }
      result.push(convertNumbers(number.join('')));
    }
    return result.join(',');
  };

  return convertMultipleNumbers(input);
};

  // Step Two: Handle multi-character binary strings and replace garbled numbers with '?'
  // TODO: Implement this step

  // Step Three: Recognize all numbers 0 through 9, both individually and as part of a larger string
  // TODO: Implement this step

  // Step Four: Handle multiple numbers, one per line, and join the lines with commas
  // TODO: Implement this step
};
