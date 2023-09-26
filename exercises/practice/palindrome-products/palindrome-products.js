//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
export class Palindromes {
  static generate({ maxFactor, minFactor = 1 }) {
    if (minFactor > maxFactor) {
      throw new Error('min must be <= max');
    }

    let smallestPalindrome = Infinity;
    let largestPalindrome = -Infinity;
    const palindromes = {};

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const product = i * j;
        if (isPalindrome(product)) {
          if (product < smallestPalindrome) {
            smallestPalindrome = product;
            palindromes.smallest = { value: smallestPalindrome, factors: [] };
          }
          if (product > largestPalindrome) {
            largestPalindrome = product;
            palindromes.largest = { value: largestPalindrome, factors: [] };
          }
          palindromes.smallest.factors.push([i, j]);
          palindromes.largest.factors.push([i, j]);
        }
      }
    }

    return palindromes;
  }
}

function isPalindrome(number) {
  const str = String(number);
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
  }
}
