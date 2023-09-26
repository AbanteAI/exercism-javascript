//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = alphabet.indexOf(letter.toUpperCase());
    const diamond = [];

    if (index === 0) {
        return ["A"];
    }

    for (let i = 0; i <= index; i++) {
        const row = " ".repeat(index - i) + alphabet[i] + " ".repeat(2 * i - 1);
        diamond.push(row);
    }

    for (let i = index - 1; i >= 0; i--) {
        const row = " ".repeat(index - i) + alphabet[i] + " ".repeat(2 * i - 1);
        diamond.push(row);
    }

    return diamond;
};

    return diamond;
};
