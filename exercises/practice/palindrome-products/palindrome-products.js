//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static generate({ maxFactor, minFactor = 1 }) {
    const palindromes = [];
    let maxPalindrome = 0;
    let minPalindrome = Infinity;

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const product = i * j;
        if (Palindromes.isPalindrome(product)) {
          if (product > maxPalindrome) {
            maxPalindrome = product;
          }
          if (product < minPalindrome) {
            minPalindrome = product;
          }
          palindromes.push([product, [i, j]]);
        }
      }
    }

    return {
      smallest: { value: minPalindrome, factors: getFactors(minPalindrome, palindromes) },
      largest: { value: maxPalindrome, factors: getFactors(maxPalindrome, palindromes) },
    };
  }

  static isPalindrome(number) {
    const str = String(number);
    return str === str.split('').reverse().join('');
  }

  static getFactors(number, palindromes) {
    return palindromes
      .filter(([product]) => product === number)
      .map(([, factors]) => factors);
  }
}
