//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { smallNumbers, tens } from './say-constants';
// Remove the unnecessary throw error statement
export const say = (n) => {
  if (n < 0 || n >= 1e12) {
    throw new Error('Number out of range');
  }

  const smallNumbers = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  const bigNumbers = [
    '', 'thousand', 'million', 'billion'
  ];

  const chunks = [];
  let num = n;

  do {
    chunks.push(num % 1000);
    num = Math.floor(num / 1000);
  } while (num > 0);

  const words = chunks.map((chunk, index) => {
    if (chunk === 0) {
      return '';
    }

    const hundreds = Math.floor(chunk / 100);
    const remainder = chunk % 100;

    const hundredPart = hundreds > 0 ? `${smallNumbers[hundreds]} hundred` : '';
    const remainderPart = remainder > 0 ? getRemainderPart(remainder) : '';

    const scale = bigNumbers[index];

    return [hundredPart, remainderPart, scale].filter(Boolean).join(' ');
  });

  return words.reverse().join(' ').trim();
};

function getRemainderPart(remainder) {
  if (remainder < 20) {
    return smallNumbers[remainder];
  } else {
    const ten = Math.floor(remainder / 10);
    const unit = remainder % 10;

    return [tens[ten], smallNumbers[unit]].filter(Boolean).join('-');
  }
}
};
