//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (input) => {
  const digits = {
    " _ | ||_|   ": "0",
    "     |  |   ": "1",
    " _  _||_    ": "2",
    " _  _| _|   ": "3",
    "   |_|  |   ": "4",
    " _ |_  _|   ": "5",
    " _ |_ |_|   ": "6",
    " _   |  |   ": "7",
    " _ |_||_|   ": "8",
    " _ |_| _|   ": "9",
  };

  const lines = input.split("\n");
  const digitRows = [];
  for (let i = 0; i < lines.length; i += 4) {
    digitRows.push(lines.slice(i, i + 4));
  }

  const result = [];
  for (const digitRow of digitRows) {
    let number = "";
    for (let i = 0; i < digitRow[0].length; i += 3) {
      const digit = digitRow.map((row) => row.slice(i, i + 3)).join("");
      number += digits[digit] || "?";
    }
    result.push(number);
  }

  return result.join(",");
};
