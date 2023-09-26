//
// This is only a SKELETON file for the 'Knapsack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const knapsack = (maximumWeight, items) => {
  const memo = Array(items.length + 1)
    .fill(null)
    .map(() => Array(maximumWeight + 1).fill(0));

  for (let i = 1; i <= items.length; i++) {
    for (let w = 1; w <= maximumWeight; w++) {
      if (items[i - 1].weight <= w) {
        memo[i][w] = Math.max(
          items[i - 1].value + memo[i - 1][w - items[i - 1].weight],
          memo[i - 1][w]
        );
      } else {
        memo[i][w] = memo[i - 1][w];
      }
    }
  }

  return memo[items.length][maximumWeight];
};
