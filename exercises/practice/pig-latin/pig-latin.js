//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (phrase) => {
  const words = phrase.split(" ");
  const translatedWords = words.map((word) => {
    if (/^[aeiou]|^xr|^yt/.test(word)) {
      return word + "ay";
    } else if (/^qu/.test(word)) {
      return word.slice(2) + word.slice(0, 2) + "ay";
    } else {
      const consonantCluster = word.match(/^[^aeiou]+/)[0];
      return word.slice(consonantCluster.length) + consonantCluster + "ay";
    }
  });
  return translatedWords.join(" ");
};
