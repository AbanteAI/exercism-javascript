//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
calculate(coinArray, target) {
    if (target < 0) {
        throw new Error('Negative change is not allowed');
    }

    const dp = Array(target + 1).fill(Infinity);
    dp[0] = [];

    for (const coin of coinArray) {
        for (let i = coin; i <= target; i++) {
            if (dp[i - coin].length + 1 < dp[i].length) {
                dp[i] = [...dp[i - coin], coin];
            }
        }
    }

    if (dp[target] === Infinity) {
        throw new Error('Cannot make change');
    }

    return dp[target];
}
}
}
