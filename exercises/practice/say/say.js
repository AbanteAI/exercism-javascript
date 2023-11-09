//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const say = (n) => {
  if (n < 0 || n > 999999999999) {
    throw new Error("Number out of range");
  }

  const ones = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
  ];
  const teens = [
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
    "seventeen", "eighteen", "nineteen"
  ];
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];
  const scales = ["", "thousand", "million", "billion"];

  const numToWords = (num, andFlag = false) => {
    if (num === 0) {
      return andFlag ? "" : "zero";
    }
    if (num < 10) {
      return ones[num];
    }
    if (num < 20) {
      return teens[num - 10];
    }
    if (num < 100) {
      const remainder = num % 10;
      return tens[Math.floor(num / 10)] + (remainder ? "-" + ones[remainder] : "");
    }
    if (num < 1000) {
      const remainder = num % 100;
      return (
        ones[Math.floor(num / 100)] +
        " hundred" +
        (remainder ? (andFlag ? " and " : " ") + numToWords(remainder, true) : "")
      );
    }
    for (let i = 0; i < scales.length; i++) {
      const scale = Math.pow(1000, i + 1);
      if (num < scale) {
        const remainder = num % (scale / 1000);
        return (
          numToWords(Math.floor(num / (scale / 1000))) +
          " " +
          scales[i] +
          (remainder ? (andFlag ? " and " : " ") + numToWords(remainder, true) : "")
        );
      }
    }
  };

  return numToWords(n).trim();
};
