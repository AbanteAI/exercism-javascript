//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (oldFormat) => {
    const newFormat = {};

    for (const [score, letters] of Object.entries(oldFormat)) {
        for (const letter of letters) {
            newFormat[letter.toLowerCase()] = Number(score);
        }
    }

    return newFormat;
};
export const transform = (oldFormat) => {
    const newFormat = {};

    for (const [score, letters] of Object.entries(oldFormat)) {
        for (const letter of letters) {
            newFormat[letter.toLowerCase()] = Number(score);
        }
    }

    return newFormat;
};
