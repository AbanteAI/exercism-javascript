//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
calculate(coinArray, target) {
    calculate(coinArray, target) {
        if (target < 0) {
            throw new Error('Negative change is not allowed');
        }

        if (target > 0 && coinArray.length === 0) {
            throw new Error('No coins available for change');
        }

        const minCoins = new Array(target + 1).fill(Infinity);
        minCoins[0] = 0;

        for (const coin of coinArray) {
            for (let i = coin; i <= target; i++) {
                minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
            }
        }

        if (minCoins[target] === Infinity) {
            throw new Error('Cannot make exact change');
        }

        const coinsUsed = [];
        let remaining = target;

        while (remaining > 0) {
            for (const coin of coinArray) {
                if (minCoins[remaining - coin] === minCoins[remaining] - 1) {
                    coinsUsed.push(coin);
                    remaining -= coin;
                    break;
                }
            }
        }

        return coinsUsed;
    }
        throw new Error('Negative change is not allowed');
    }

    if (target > 0 && coinArray.length === 0) {
        throw new Error('No coins available for change');
    }

    const minCoins = new Array(target + 1).fill(Infinity);
    minCoins[0] = 0;

    for (const coin of coinArray) {
        for (let i = coin; i <= target; i++) {
            minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
        }
    }

    if (minCoins[target] === Infinity) {
        throw new Error('Cannot make exact change');
    }

    const coinsUsed = [];
    let remaining = target;

    while (remaining > 0) {
        for (const coin of coinArray) {
            if (minCoins[remaining - coin] === minCoins[remaining] - 1) {
                coinsUsed.push(coin);
                remaining -= coin;
                break;
            }
        }
    }

    return coinsUsed;
}
  }
}
