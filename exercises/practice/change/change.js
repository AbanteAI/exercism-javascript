//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
calculate(coinArray, target) {
calculate(coinArray, target) {
    if (target < 0) {
        throw new Error('Negative target value not allowed');
    }

    if (target < Math.min(...coinArray)) {
        throw new Error('Change value smaller than the smallest coin value');
    }

    const dp = new Array(target + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coinArray) {
        for (let i = coin; i <= target; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[target] === Infinity ? -1 : dp[target];
}
        throw new Error('Negative target value not allowed');
    }

    if (target < Math.min(...coinArray)) {
        throw new Error('Change value smaller than the smallest coin value');
    }

    const dp = new Array(target + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coinArray) {
        for (let i = coin; i <= target; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[target] === Infinity ? -1 : dp[target];
}
  }
}
