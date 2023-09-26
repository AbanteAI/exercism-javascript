//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...words) => {
  const lines = [];
  for (let i = 0; i < words.length - 1; i++) {
    lines.push(`For want of a ${words[i]} the ${words[i + 1]} was lost.`);
  }
  if (words.length > 0) {
    lines.push(`And all for the want of a ${words[0]}.`);
  }
  return lines.join('\n');
};
