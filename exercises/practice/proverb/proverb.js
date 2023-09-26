//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (list) => {
  let result = '';
  for (let i = 0; i < list.length - 1; i++) {
    result += `For want of a ${list[i]} the ${list[i + 1]} was lost.\n`;
  }
  if (list.length > 0) {
    result += `And all for the want of a ${list[0]}.`;
  }
  return result;
};
