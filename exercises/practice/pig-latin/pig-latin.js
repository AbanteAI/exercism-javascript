//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (phrase) => {
  return phrase.split(' ').map(translateWord).join(' ');
};

const translateWord = (word) => {
  if (startsWithVowelSound(word)) {
    return word + 'ay';
  } else if (startsWithConsonantSound(word)) {
    const consonantSound = getConsonantSound(word);
    return word.slice(consonantSound.length) + consonantSound + 'ay';
  } else {
    return word;
  }
};

const startsWithVowelSound = (word) => {
  return /^[aeiou]|^(xr|yt)/.test(word);
};

const startsWithConsonantSound = (word) => {
  return /^[^aeiou]+(?!(xr|yt))/.test(word);
};

const getConsonantSound = (word) => {
  const match = /^[^aeiou]+(?!(xr|yt))/.exec(word);
  return match ? match[0] : '';
};
