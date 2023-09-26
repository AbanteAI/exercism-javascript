//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (input) => {
  const binaryFont = {
    " _ | ||_|   ": "0",
    "     |  |   ": "1",
    " _  _||_    ": "2",
    " _  _| _|   ": "3",
    "   |_|  |   ": "4",
    " _ |_  _|   ": "5",
    " _ |_ |_|   ": "6",
    " _   |  |   ": "7",
    " _ |_||_|   ": "8",
    " _ |_| _|   ": "9"
  };

  const lines = input.split("\n");
  const numbers = [];

  for (let i = 0; i < lines.length; i += 4) {
    const line1 = lines[i];
    const line2 = lines[i + 1];
    const line3 = lines[i + 2];

    if (line1.length % 3 !== 0 || line2.length % 3 !== 0 || line3.length % 3 !== 0) {
      throw new Error("Invalid input size");
    }

    if (binaryFont.hasOwnProperty(digit)) {
        number += binaryFont[digit];
    } else {
        number += "?";
    }

    numbers.push(number);
  }

    return numbers.join(",");
