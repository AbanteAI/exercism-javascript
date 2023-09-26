//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const chain = (dominoes) => {
    if (dominoes.length === 0) {
        return [];
    }

    const result = [];
    const used = new Array(dominoes.length).fill(false);

    const backtrack = (prev) => {
        if (result.length === dominoes.length) {
            return result[0][0] === result[result.length - 1][1];
        }

        for (let i = 0; i < dominoes.length; i++) {
            if (used[i]) {
                continue;
            }

            const [left, right] = dominoes[i];

            if (prev === null || prev === right) {
                result.push([left, right]);
                used[i] = true;

                if (backtrack(left)) {
                    return true;
                }

                result.pop();
                used[i] = false;
            }

            if (prev === null || prev === left) {
                result.push([right, left]);
                used[i] = true;

                if (backtrack(right)) {
                    return true;
                }

                result.pop();
                used[i] = false;
            }
        }

        return false;
    };

    if (backtrack(null)) {
        return result;
    } else {
        return null;
    }
};

    const result = [];
    const used = new Array(dominoes.length).fill(false);

    const backtrack = (prev) => {
        if (result.length === dominoes.length) {
            return result[0][0] === result[result.length - 1][1];
        }

        for (let i = 0; i < dominoes.length; i++) {
            if (used[i]) {
                continue;
            }

            const [left, right] = dominoes[i];

            if (prev === null || prev === right) {
                result.push([left, right]);
                used[i] = true;

                if (backtrack(left)) {
                    return true;
                }

                result.pop();
                used[i] = false;
            }

            if (prev === null || prev === left) {
                result.push([right, left]);
                used[i] = true;

                if (backtrack(right)) {
                    return true;
                }

                result.pop();
                used[i] = false;
            }
        }

        return false;
    };

    if (backtrack(null)) {
        return result;
    } else {
        return null;
    }
};
}
