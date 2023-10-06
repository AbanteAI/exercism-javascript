// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    if (target === 0) return [];
    if (target < 0) throw new Error('Negative totals are not allowed.');
    if (coinArray.length === 0) throw new Error('No coins available.');
    coinArray.sort((a, b) => b - a);

    const result = [];
    const findChange = (remaining, coins) => {
      if (remaining === 0) return;
      if (coins.length === 0) return;
      const coin = coins[0];
      const count = Math.floor(remaining / coin);
      for (let i = count; i >= 0; i--) {
        const newRemaining = remaining - i * coin;
        const newCoins = coins.slice(1);
        const partialResult = Array(i).fill(coin);
        if (newRemaining === 0) {
          result.push(...partialResult);
          return;
        }
        findChange(newRemaining, newCoins);
      }
    };

    findChange(target, coinArray);
    if (result.length === 0) throw new Error('Cannot make change.');
    return result;
  }
  }
}
