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
      const match = word.match(/^[^aeiou]+/);
      return word.slice(match[0].length) + match[0] + "ay";
    }
  });
  return translatedWords.join(" ");
};
