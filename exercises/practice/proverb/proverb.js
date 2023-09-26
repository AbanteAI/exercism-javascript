//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (list) => {
  if (!list || list.length === 0) {
    return '';
  }
  
  let proverbLines = [];
  
  for (let i = 0; i < list.length - 1; i++) {
    proverbLines.push(`For want of a ${list[i]} the ${list[i + 1]} was lost.`);
  }
  
  proverbLines.push(`And all for the want of a ${list[0]}.`);
  
  return proverbLines.join('\n');
};
  
  let proverbLines = [];
  
  for (let i = 0; i < list.length - 1; i++) {
    proverbLines.push(`For want of a ${list[i]} the ${list[i + 1]} was lost.`);
  }
  
  proverbLines.push(`And all for the want of a ${list[0]}.`);
  
  return proverbLines.join('\n');
};
