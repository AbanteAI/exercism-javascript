//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
export class Palindromes {
  static generate(min, max) {
    const isPalindrome = (num) => {
      const str = String(num);
      return str === str.split('').reverse().join('');
    };

    const palindromes = [];

    for (let i = min; i <= max; i++) {
      for (let j = i; j <= max; j++) {
        const product = i * j;
        if (isPalindrome(product)) {
          palindromes.push({
            value: product,
            factors: [[i, j]]
          });
        }
      }
    }

    return palindromes;
  }
}