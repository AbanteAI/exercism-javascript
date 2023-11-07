//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static generate({ minFactor, maxFactor }) {
    if (minFactor > maxFactor) {
      throw new Error('minFactor must be less than or equal to maxFactor');
    }

    let smallest = { value: null, factors: [] };
    let largest = { value: null, factors: [] };

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        let product = i * j;
        if (this.isPalindrome(product)) {
          if (smallest.value === null || product < smallest.value) {
            smallest.value = product;
            smallest.factors = [[i, j]];
          } else if (product === smallest.value) {
            smallest.factors.push([i, j]);
          }

          if (largest.value === null || product > largest.value) {
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

  static isPalindrome(number) {
    const str = number.toString();
    return str === str.split('').reverse().join('');
  }
}
