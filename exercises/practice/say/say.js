//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const say = (n) => {
  if (n < 0 || n > 999999999999) {
    throw new Error('Number must be between 0 and 999,999,999,999');
  }

  const smallNumbers = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  const sayNumber = (number) => {
    if (number < 20) {
      return smallNumbers[number];
    } else if (number < 100) {
      return tens[Math.floor(number / 10)] + (number % 10 !== 0 ? '-' + smallNumbers[number % 10] : '');
    } else {
      return smallNumbers[Math.floor(number / 100)] + ' hundred' + (number % 100 !== 0 ? ' and ' + sayNumber(number % 100) : '');
    }
  };

  const sayThousands = (number) => {
    if (number === 0) {
      return '';
    } else {
      const thousands = ['thousand', 'million', 'billion'];
      const chunks = [];
      while (number > 0) {
        chunks.unshift(number % 1000);
        number = Math.floor(number / 1000);
      }
      return chunks.map((chunk, index) => {
        if (chunk === 0) {
          return '';
        } else {
          return sayNumber(chunk) + ' ' + (index < thousands.length ? thousands[chunks.length - index - 1] : '');
        }
      }).join(' ').trim();
    }
  };

  if (n === 0) {
    return smallNumbers[0];
  } else {
    return sayThousands(n);
  }
};
