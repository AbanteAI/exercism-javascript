//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const say = (n) => {
  if (n < 0 || n >= 1e12) {
    throw new Error('Number must be between 0 and 999,999,999,999');
  }

  const ones = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  const scales = ['', 'thousand', 'million', 'billion'];

  const toEnglish = (num) => {
    if (num < 20) {
      return ones[num];
    } else if (num < 100) {
      return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? '-' + ones[num % 10] : '');
    } else if (num < 1000) {
      return ones[Math.floor(num / 100)] + ' hundred' + (num % 100 !== 0 ? ' ' + toEnglish(num % 100) : '');
    } else {
      for (let i = 1; i < scales.length; i++) {
        if (num < 1000 ** (i + 1)) {
          const scale = scales[i];
          const remainder = num % (1000 ** i);
          const quotient = Math.floor(num / (1000 ** i));
          return toEnglish(quotient) + ' ' + scale + (remainder !== 0 ? ' ' + toEnglish(remainder) : '');
        }
      }
    }
  };

  return toEnglish(n);
};
