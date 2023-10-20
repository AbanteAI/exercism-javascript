//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const say = (n) => {
  if (n < 0 || n > 999999999999) {
    throw new Error('Number must be between 0 and 999,999,999,999');
  }

  const smallNumbers = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];

  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  const scales = ['', 'thousand', 'million', 'billion'];

  const chunkify = (number) => {
    const chunks = [];
    while (number > 0) {
      chunks.unshift(number % 1000);
      number = Math.floor(number / 1000);
    }
    return chunks;
  };

  const sayChunk = (number) => {
    let words = [];

    if (number >= 100) {
      words.push(smallNumbers[Math.floor(number / 100)]);
      words.push('hundred');
      number %= 100;
    }

    if (number >= 20) {
      words.push(tens[Math.floor(number / 10)]);
      number %= 10;
    }

    if (number > 0) {
      words.push(smallNumbers[number]);
    }

    return words.join(' ');
  };

  if (n === 0) {
    return smallNumbers[0];
  }

  const chunks = chunkify(n);
  const chunkWords = chunks.map((chunk, index) => {
    if (chunk === 0) {
      return '';
    }
    const scaleWord = scales[chunks.length - 1 - index];
    return `${sayChunk(chunk)} ${scaleWord}`;
  });

  const result = chunkWords.filter(word => word !== '').join(' ').replace(/ ([^ ]+)$/g, ' and $1');
  return result.trim();
};
