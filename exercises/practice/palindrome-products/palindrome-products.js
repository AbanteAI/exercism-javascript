//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function isPalindrome(num) {
  const strNum = num.toString();
  const reversedStrNum = strNum.split('').reverse().join('');
  return strNum === reversedStrNum;
}
export class Palindromes {
  static generate({ minFactor = 1, maxFactor = 1 }) {
    const palindromes = [];

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const product = i * j;
        if (isPalindrome(product)) {
          palindromes.push({ value: product, factors: [i, j] });
        }
      }
    }

    palindromes.sort((a, b) => a.value - b.value);

    const smallest = palindromes[0];
    const largest = palindromes[palindromes.length - 1];

    return {
      smallest: {
        value: smallest.value,
        factors: palindromes.filter(p => p.value === smallest.value).map(p => p.factors),
      },
      largest: {
        value: largest.value,
        factors: palindromes.filter(p => p.value === largest.value).map(p => p.factors),
      },
    };
  }
}
