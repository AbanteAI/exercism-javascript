//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonantClusters = ['ch', 'qu', 'th', 'thr', 'sch'];
  
  if (vowels.includes(word[0]) || (word.startsWith('xr') || word.startsWith('yt'))) {
    return word + 'ay';
  } else if (consonantClusters.some(cluster => word.startsWith(cluster))) {
    const cluster = consonantClusters.find(cluster => word.startsWith(cluster));
    return word.slice(cluster.length) + cluster + 'ay';
  } else {
    const consonantSound = word.match(/^[^aeiou]+/)[0];
    return word.slice(consonantSound.length) + consonantSound + 'ay';
  }
};
};
