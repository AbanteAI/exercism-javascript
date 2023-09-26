//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const aliquotSum = (number) => {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum;
};

export const classify = (number) => {
    if (number <= 0) {
        throw new Error('Classification is only possible for natural numbers.');
    }

    const sum = aliquotSum(number);

    if (sum === number) {
        return 'perfect';
    } else if (sum > number) {
        return 'abundant';
    } else {
        return 'deficient';
    }
};
