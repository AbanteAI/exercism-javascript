//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...inputs) => {
  const lines = [];
  for (let i = 0; i < inputs.length - 1; i++) {
    lines.push(`For want of a ${inputs[i]} the ${inputs[i + 1]} was lost.`);
  }
  if (inputs.length > 0) {
    lines.push(`And all for the want of a ${inputs[0]}.`);
  }
  return lines.join('\n');
};
};
