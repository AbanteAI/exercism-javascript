//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonantClusters = ['ch', 'qu', 'th', 'thr', 'sch'];
  const consonantSounds = [...consonantClusters, 'p', 'k', 'x', 'q'];
  
  if (vowels.includes(word[0]) || (word.startsWith('xr') || word.startsWith('yt'))) {
    return word + 'ay';
  } else if (consonantSounds.some(sound => word.startsWith(sound))) {
    if (word.startsWith('qu')) {
      return word.slice(2) + word.slice(0, 2) + 'ay';
    } else if (consonantClusters.some(cluster => word.startsWith(cluster))) {
      return word.slice(cluster.length) + word.slice(0, cluster.length) + 'ay';
    } else {
      return word.slice(1) + word[0] + 'ay';
    }
  }
};
