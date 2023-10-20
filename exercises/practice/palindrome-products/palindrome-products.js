//
// This is only a SKELETON file for the 'Palindrome Products' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Palindromes {
static generate({ minFactor, maxFactor }) {
    if (minFactor > maxFactor) {
        throw new Error('min must be <= max');
    }

    let smallest = Infinity;
    let largest = 0;
    let factors = {};

    for (let i = minFactor; i <= maxFactor; i++) {
        for (let j = i; j <= maxFactor; j++) {
            const product = i * j;
            if (isPalindrome(product)) {
                if (product < smallest) {
                    smallest = product;
                    factors[smallest] = [[i, j]];
                } else if (product === smallest) {
                    factors[smallest].push([i, j]);
                }

                if (product > largest) {
                    largest = product;
                    factors[largest] = [[i, j]];
                } else if (product === largest) {
                    factors[largest].push([i, j]);
                }
            }
        }
    }

    return {
        smallest,
        largest,
        factors
    };
}

function isPalindrome(number) {
    const str = number.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

export class Palindromes {
    static generate({ minFactor, maxFactor }) {
        if (minFactor > maxFactor) {
            throw new Error('min must be <= max');
        }

        let smallest = Infinity;
        let largest = 0;
        let factors = {};

        for (let i = minFactor; i <= maxFactor; i++) {
            for (let j = i; j <= maxFactor; j++) {
                const product = i * j;
                if (isPalindrome(product)) {
                    if (product < smallest) {
                        smallest = product;
                        factors[smallest] = [[i, j]];
                    } else if (product === smallest) {
                        factors[smallest].push([i, j]);
                    }

                    if (product > largest) {
                        largest = product;
                        factors[largest] = [[i, j]];
                    } else if (product === largest) {
                        factors[largest].push([i, j]);
                    }
                }
            }
        }

        return {
            smallest,
            largest,
            factors
        };
    }
}
  }
}
