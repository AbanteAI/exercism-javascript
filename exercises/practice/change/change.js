//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
export class Change {
  calculate(coinArray, target) {
    if (target < 0) throw new Error('Negative totals are not allowed.');
    if (target !== 0 && coinArray.every(coin => coin > target)) {
      throw new Error('The total cannot be represented in the given currency.');
    }

    let result = [];
    let remaining = target;

    // Sort the array in descending order to start with the largest coin value
    coinArray.sort((a, b) => b - a);

    for (let coin of coinArray) {
      while (remaining - coin >= 0) {
        remaining -= coin;
        result.push(coin);
      }
      if (remaining === 0) break;
    }

    return result.length === 0 && target !== 0 ? null : result;
  }
}
