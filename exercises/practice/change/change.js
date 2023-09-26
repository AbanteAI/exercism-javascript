//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    // Sort the coinArray in descending order
    coinArray.sort((a, b) => b - a);
  
    // Initialize the count of coins and index of current coin
    let coinCount = 0;
    let coinIndex = 0;
  
    // Iterate through the coinArray
    while (target > 0 && coinIndex < coinArray.length) {
      // Check if the current coin can be used to make change
      if (coinArray[coinIndex] <= target) {
        // Calculate the number of coins needed and update the target
        const numCoins = Math.floor(target / coinArray[coinIndex]);
        coinCount += numCoins;
        target -= numCoins * coinArray[coinIndex];
      }
  
      // Move to the next coin
      coinIndex++;
    }
  
    // Return the fewest number of coins needed
    return coinCount;
  }
  }
}
