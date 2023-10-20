//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const say = (n) => {
  if (n < 0 || n > 999999999999) {
    throw new Error('Number out of range');
  }

  const basicNumbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  const scaleWords = {
    1: 'thousand',
    2: 'million',
    3: 'billion',
    4: 'trillion',
  };

  if (n < 0 || n > 999999999999) {
    throw new Error('Number out of range');
  }

  if (n <= 20) {
    return basicNumbers[n];
  }

  // Break number into chunks of thousands

  // Insert scale words between the chunks

  // Spell out the number in plain English

  // Optionally, use the 'say' program or 'espeak' to speak out loud
};
