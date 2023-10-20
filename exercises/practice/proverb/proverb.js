//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...args) => {
  let proverbLines = [];
  for (let i = 0; i < args.length - 1; i++) {
    if (typeof args[i + 1] === 'object') {
      proverbLines.push(`And all for the want of a ${args[i + 1].qualifier} ${args[0]}.`);
      break;
    } else {
      proverbLines.push(`For want of a ${args[i]} the ${args[i + 1]} was lost.`);
    }
  }
  return proverbLines.join('\n');
};
