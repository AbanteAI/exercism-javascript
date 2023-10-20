//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
  static isPalindrome(num) {
    const strNum = num.toString();
    const reversedStrNum = strNum.split('').reverse().join('');
    return strNum === reversedStrNum;
  }
  static generate({ minFactor = 1, maxFactor }) {
    if (minFactor > maxFactor) {
      throw new Error('min must be <= max');
    }

    let smallest = { value: Infinity, factors: [] };
    let largest = { value: -Infinity, factors: [] };

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
        const product = i * j;
        if (this.isPalindrome(product)) {
          if (product < smallest.value) {
            smallest = { value: product, factors: [[i, j]] };
          } else if (product === smallest.value) {
            smallest.factors.push([i, j]);
          }

          if (product > largest.value) {
            largest = { value: product, factors: [[i, j]] };
          } else if (product === largest.value) {
            largest.factors.push([i, j]);
          }
        }
      }
    }

    return { smallest, largest };
  }
}
