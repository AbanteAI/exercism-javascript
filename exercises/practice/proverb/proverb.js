//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...args) => {
  const lastArg = args[args.length - 1];
  const qualifier = lastArg && typeof lastArg === 'object' ? lastArg.qualifier + ' ' : '';

  const lines = args.map((arg, i) => {
    if (i === args.length - 1) {
      return `And all for the want of a ${qualifier}${arg}.`;
    } else {
      return `For want of a ${arg} the ${args[i + 1]} was lost.`;
    }
  });

  return lines.join('\n');
};
