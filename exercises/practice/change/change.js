//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    if (target < 0) {
      throw new Error('Negative change not allowed');
    }

    const dp = Array(target + 1).fill(Infinity);
    dp[0] = 0;

    for (const coin of coinArray) {
      for (let i = coin; i <= target; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }

    if (dp[target] === Infinity) {
      throw new Error('No combination can sum to target');
    }

    const result = [];
    let remaining = target;

    for (let i = coinArray.length - 1; i >= 0; i--) {
      while (remaining >= coinArray[i] && dp[remaining] === dp[remaining - coinArray[i]] + 1) {
        result.push(coinArray[i]);
        remaining -= coinArray[i];
      }
      if (remaining === 0) {
        break;
      }
    }

    return result;
  }
  }
}
