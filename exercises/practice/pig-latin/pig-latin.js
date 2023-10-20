//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isVowel = (char) => {
  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
};

const findFirstVowelIndex = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (isVowel(word[i])) {
      return i;
    }
  }
  return -1;
};

export const translate = (phrase) => {
  const words = phrase.split(' ');
  const translatedWords = words.map((word) => {
    const firstVowelIndex = findFirstVowelIndex(word);
    if (firstVowelIndex === 0 || (word.startsWith('xr') || word.startsWith('yt'))) {
      return word + 'ay';
    } else if (word[firstVowelIndex - 1] === 'q' && word[firstVowelIndex] === 'u') {
      return word.slice(firstVowelIndex + 1) + word.slice(0, firstVowelIndex + 1) + 'ay';
    } else {
      return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
    }
  });

  return translatedWords.join(' ');
};
