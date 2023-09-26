//
// This is only a SKELETON file for the 'Knapsack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const knapsack = (maximumWeight, items) => {
  const n = items.length;
  const dp = Array.from({ length: n + 1 }, () => Array(maximumWeight + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { weight, value } = items[i - 1];
    for (let w = 1; w <= maximumWeight; w++) {
      if (weight <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight] + value);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][maximumWeight];
};
