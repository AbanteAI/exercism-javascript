//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const smallNumbers = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
  'seventeen', 'eighteen', 'nineteen'
];

const tens = [
  '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

const scales = ['billion', 'million', 'thousand', ''];

function sayNumberBelowHundred(n) {
  if (n < 20) return smallNumbers[n];
  const ten = Math.floor(n / 10);
  const remainder = n % 10;
  return tens[ten] + (remainder ? '-' + smallNumbers[remainder] : '');
}

function chunkNumber(n) {
  const chunks = [];
  while (n > 0) {
    chunks.unshift(n % 1000);
    n = Math.floor(n / 1000);
  }
  return chunks;
}

function chunkToEnglish(chunk, scale) {
  let words = [];
  const hundreds = Math.floor(chunk / 100);
  const remainder = chunk % 100;

  if (hundreds) words.push(sayNumberBelowHundred(hundreds), 'hundred');
  if (remainder) {
    if (words.length) words.push('and');
    words.push(sayNumberBelowHundred(remainder));
  }

  return words.length ? words.join(' ') + (scale ? ' ' + scale : '') : '';
}

export const say = (n) => {
  if (n < 0 || n > 999999999999) {
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }
  if (n === 0) return smallNumbers[n];

  const chunks = chunkNumber(n);
  const scaleChunks = scales.slice(scales.length - chunks.length);
  const words = chunks.map((chunk, index) => chunkToEnglish(chunk, scaleChunks[index]));

  return words.filter(word => word).join(' ');
};
