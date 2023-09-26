//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static isPalindrome(number) {
    const str = number.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  static generate({ minFactor = 1, maxFactor }) {
    if (minFactor > maxFactor) {
      throw new Error('min must be <= max');
    }

    const smallest = { value: Infinity, factors: [] };
    const largest = { value: 0, factors: [] };

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const product = i * j;
        if (this.isPalindrome(product)) {
          if (product < smallest.value) {
            smallest.value = product;
            smallest.factors = [[i, j]];
          } else if (product === smallest.value) {
            smallest.factors.push([i, j]);
          }

          if (product > largest.value) {
            largest.value = product;
            largest.factors = [[i, j]];
          } else if (product === largest.value) {
            largest.factors.push([i, j]);
          }
        }
      }
    }

    return { smallest, largest };
  }
  }
