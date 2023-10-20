//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const OCR_MAP = {
  " _ | ||_|": "0",
  "     |  |": "1",
  " _  _||_ ": "2",
  " _  _| _|": "3",
  "   |_|  |": "4",
  " _ |_  _|": "5",
  " _ |_ |_|": "6",
  " _   |  |": "7",
  " _ |_||_|": "8",
  " _ |_| _|": "9"
};

export const convert = (input) => {
  const lines = input.split("\n");
  const numRows = lines.length;
  const numCols = lines[0].length;

  if (numRows % 4 !== 0 || numCols % 3 !== 0) {
    throw new Error("Invalid input size");
  }

  let result = "";
  for (let row = 0; row < numRows; row += 4) {
    let rowResult = "";
    for (let col = 0; col < numCols; col += 3) {
      const ocrChar = lines.slice(row, row + 4).map(line => line.slice(col, col + 3)).join("");
      rowResult += OCR_MAP[ocrChar] || "?";
    }
    result += rowResult + (row + 4 < numRows ? "," : "");
  }

  return result;
};
  throw new Error('Remove this statement and implement this function');
};
