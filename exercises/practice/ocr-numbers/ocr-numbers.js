//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (input) => {
  const digits = [
    " _ | ||_|   ", // 0
    "     |  |   ", // 1
    " _  _||_    ", // 2
    " _  _| _|   ", // 3
    "   |_|  |   ", // 4
    " _ |_  _|   ", // 5
    " _ |_ |_|   ", // 6
    " _   |  |   ", // 7
    " _ |_||_|   ", // 8
    " _ |_| _|   ", // 9
  ];

  const lines = input.split("\n");
  if (lines.length % 4 !== 0) {
    throw new Error("Invalid input size");
  }

  const result = [];
  for (let i = 0; i < lines.length; i += 4) {
    const line1 = lines[i];
    const line2 = lines[i + 1];
    const line3 = lines[i + 2];

    if (line1.length !== line2.length || line2.length !== line3.length) {
      throw new Error("Invalid input size");
    }

    let number = "";
    for (let j = 0; j < line1.length; j += 3) {
      const digit = line1.slice(j, j + 3) + line2.slice(j, j + 3) + line3.slice(j, j + 3);
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";
      number += index !== -1 ? index.toString() : "?";

    result.push(number);
  }

  return result.join(",");
};
