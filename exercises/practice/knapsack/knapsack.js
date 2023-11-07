//
// This is only a SKELETON file for the 'Knapsack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const knapsack = (maximumWeight, items) => {
  // Initialize a table to store the maximum value at each weight from 0 to maximumWeight
  const maxValuesAtWeights = new Array(maximumWeight + 1).fill(0);

  // Iterate over each item
  for (const item of items) {
    // Iterate through the possible weights in reverse to avoid using an item more than once
    for (let weight = maximumWeight; weight >= item.weight; weight--) {
      // If the current item can fit in the knapsack at the current weight
      if (maxValuesAtWeights[weight - item.weight] + item.value > maxValuesAtWeights[weight]) {
        // Update the maximum value at this weight
        maxValuesAtWeights[weight] = maxValuesAtWeights[weight - item.weight] + item.value;
      }
    }
  }

  // The last element in maxValuesAtWeights will be the maximum value we can carry
  return maxValuesAtWeights[maximumWeight];
};
