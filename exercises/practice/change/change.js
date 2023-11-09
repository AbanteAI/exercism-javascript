//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    if (target < 0) {
      throw new Error("Negative target is not allowed");
    }

    const dp = new Array(target + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coinArray) {
      for (let i = coin; i <= target; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }

    if (dp[target] === Infinity) {
      throw new Error("No combination of coins can sum to the target");
    }

    const result = [];
    let remaining = target;
    for (let coin of coinArray.reverse()) {
      while (remaining >= coin && dp[remaining] === dp[remaining - coin] + 1) {
        result.push(coin);
        remaining -= coin;
      }
    }

    return result;
  }
}
