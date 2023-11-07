//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
    if (typeof word !== 'string') {
        return false;
    }

    const cleanWord = word.toLowerCase().replace(/[\s-]/g, '');
    const letterSet = new Set(cleanWord);

    return cleanWord.length === letterSet.size;
};
