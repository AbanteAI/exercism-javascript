//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...args) => {
  const qualifier = typeof args[args.length - 1] === 'object' ? args.pop().qualifier : '';
  let proverbLines = args.map((item, index, array) => {
    if (index < array.length - 1) {
      return `For want of a ${item} the ${array[index + 1]} was lost.`;
    }
    return null;
  }).filter(line => line !== null);

  if (qualifier) {
    proverbLines.push(`And all for the want of a ${qualifier} ${args[0]}.`);
  } else if (args.length > 0) {
    proverbLines.push(`And all for the want of a ${args[0]}.`);
  }

  return proverbLines.join('\n');
};
