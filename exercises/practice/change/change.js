//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    const sortedCoins = coinArray.sort((a, b) => b - a);
    let remaining = target;
    const result = [];

    for (const coin of sortedCoins) {
      while (remaining >= coin) {
        result.push(coin);
        remaining -= coin;
      }
    }

    if (remaining !== 0) {
      throw new Error("Cannot make change with the given coins");
    }

    return result;
  }
}
