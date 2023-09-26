//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonantClusters = ['ch', 'qu', 'squ', 'thr', 'th', 'sch'];
  
  const translateWord = (word) => {
    if (vowels.includes(word[0]) || (word[0] === 'y' && !vowels.includes(word[1]))) {
      return word + 'ay';
    }
  
    for (const cluster of consonantClusters) {
      if (word.startsWith(cluster)) {
        return word.slice(cluster.length) + cluster + 'ay';
      }
    }
  
    return word.slice(1) + word[0] + 'ay';
  };

  return word.split(' ').map(translateWord).join(' ');
};
