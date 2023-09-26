//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  function isPalindrome(num) {
    const str = String(num);
    return str === str.split('').reverse().join('');
  }
export class Palindromes {
  static generate({minFactor, maxFactor}) {
    if (minFactor > maxFactor) {
      throw new Error('min must be <= max');
    }

    const palindromes = {};

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const product = i * j;
        if (isPalindrome(product)) {
          if (!palindromes[product]) {
            palindromes[product] = [];
          }
          palindromes[product].push([i, j]);
        }
      }
    }

    function isPalindrome(num) {
      const str = String(num);
      return str === str.split('').reverse().join('');
    }

    const smallest = Math.min(...Object.keys(palindromes));
    const largest = Math.max(...Object.keys(palindromes));

    return {
      smallest: {
        value: smallest,
        factors: palindromes[smallest],
      },
      largest: {
        value: largest,
        factors: palindromes[largest],
      },
    };
  }
  }
}
