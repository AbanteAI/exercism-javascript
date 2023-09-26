//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    if (target < 0) {
      throw new Error("Negative totals are not allowed.");
    }

    const minCoins = Array(target + 1).fill(Infinity);
    minCoins[0] = 0;

    for (const coin of coinArray) {
      for (let i = coin; i <= target; i++) {
        minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
      }
    }

    if (minCoins[target] === Infinity) {
      throw new Error("The total " + target + " cannot be represented in the given currency.");
    }

    const result = [];
    let remaining = target;

    for (const coin of coinArray.sort((a, b) => b - a)) {
      while (remaining >= coin && minCoins[remaining] === minCoins[remaining - coin] + 1) {
        result.push(coin);
        remaining -= coin;
      }
    }

    return result;
  }
}
