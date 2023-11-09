//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...args) => {
  let proverbLines = [];
  for (let i = 0; i < args.length - 1; i++) {
    if (typeof args[i] === 'string' && typeof args[i + 1] === 'string') {
      proverbLines.push(`For want of a ${args[i]} the ${args[i + 1]} was lost.`);
    } else if (typeof args[i + 1] === 'object' && args[i + 1].qualifier) {
      proverbLines.push(`And all for the want of a ${args[i + 1].qualifier} ${args[i]}.`);
    }
  }
  return proverbLines.join('\n');
};
