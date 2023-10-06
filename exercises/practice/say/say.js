//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const say = (n) => {
  if (n < 0 || n > 999999999999) {
    throw new Error('Number out of range');
  }

  if (n === 0) {
    return 'zero';
  }

  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const scales = ['', 'thousand', 'million', 'billion'];

  const toEnglish = (num) => {
    if (num === 0) {
      return '';
    } else if (num < 10) {
      return ones[num];
    } else if (num < 20) {
      return teens[num - 10];
    } else if (num < 100) {
      return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + ones[num % 10] : '');
    } else {
      return ones[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + toEnglish(num % 100) : '');
    }
  };

  const chunks = [];
  while (n > 0) {
    chunks.push(n % 1000);
    n = Math.floor(n / 1000);
  }

  const result = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    if (chunk !== 0) {
      result.unshift(toEnglish(chunk) + ' ' + scales[i]);
    }
  }

  return result.join(' ');
};
