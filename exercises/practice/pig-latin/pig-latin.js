//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (phrase) => {
  const isVowel = (char) => {
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
  };

  const findFirstVowelIndex = (word) => {
    for (let i = 0; i < word.length; i++) {
      if (isVowel(word[i])) {
        return i;
      }
    }
    return -1;
  };

  return phrase.split(' ').map((word) => {
    let firstVowelIndex = findFirstVowelIndex(word);

    if (firstVowelIndex === 0 || (word.startsWith('xr') || word.startsWith('yt'))) {
      return word + 'ay';
    }

    if (word[firstVowelIndex - 1] === 'q' && word[firstVowelIndex] === 'u') {
      firstVowelIndex++;
    }

    return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
  }).join(' ');
};
