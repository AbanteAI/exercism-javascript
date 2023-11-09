//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (sentence) => {
  const words = sentence.split(' ');

  const translatedWords = words.map((word) => {
    if (word.match(/^[aeiou]|^(xr|yt)/)) {
      return word + 'ay';
    }

    const consonantCluster = word.match(/^[^aeiou]+(?:(?=qu)|[^y])/);
    const restOfTheWord = word.slice(consonantCluster[0].length);
    return restOfTheWord + consonantCluster[0] + 'ay';
  });

  return translatedWords.join(' ');
};
