//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (sentence) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelSounds = ['xr', 'yt'];

  const translateWord = (word) => {
    if (vowels.includes(word[0]) || vowelSounds.some(vowelSound => word.startsWith(vowelSound))) {
      return word + 'ay';
    } else {
      let consonantCluster = word.match(/^(?:[^aeiou]+qu|[^aeiouy]+|y(?=.[aeiouy]))/)[0];
      return word.substring(consonantCluster.length) + consonantCluster + 'ay';
    }
  };

  return sentence.split(' ').map(translateWord).join(' ');
};
