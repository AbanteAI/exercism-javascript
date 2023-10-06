//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static isPalindrome(num) {
    const str = String(num);
    return str === str.split('').reverse().join('');
  }

  static generate({ maxFactor, minFactor = 1 }) {
    if (minFactor > maxFactor) {
      throw new Error('min must be <= max');
    }

    const palindromes = {};
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const product = i * j;
        if (Palindromes.isPalindrome(product)) {
          if (!palindromes[product]) {
            palindromes[product] = [];
          }
          palindromes[product].push([i, j]);
        }
      }
    }

    return {
      smallest: {
        value: Math.min(...Object.keys(palindromes)),
        factors: palindromes[Math.min(...Object.keys(palindromes))],
      },
      largest: {
        value: Math.max(...Object.keys(palindromes)),
        factors: palindromes[Math.max(...Object.keys(palindromes))],
      },
    };
  }
}
