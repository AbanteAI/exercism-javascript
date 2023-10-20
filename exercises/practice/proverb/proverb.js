//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// This is the proverb function that generates the relevant proverb based on the given list of inputs.
// If the final item in the list is an object with a qualifier, it modifies the final line in the proverb.
export const proverb = (list) => {
  if (!list || list.length === 0) {
    return '';
  }

  const lines = [];
  for (let i = 0; i < list.length - 1; i++) {
    lines.push(`For want of a ${list[i]} the ${list[i + 1]} was lost.`);
  }

  const lastItem = list[list.length - 1];
  if (typeof lastItem === 'object' && lastItem.qualifier) {
    lines.push(`And all for the want of a ${lastItem.qualifier} ${list[0]}.`);
  } else {
    lines.push(`And all for the want of a ${lastItem}.`);
  }

  return lines.join('\n');
};
  return lines.join('\n');
};

  return lines.join('\n');
};
  }

  const lines = [];
  for (let i = 0; i < list.length - 1; i++) {
    lines.push(`For want of a ${list[i]} the ${list[i + 1]} was lost.`);
  }

  const lastItem = list[list.length - 1];
  if (typeof lastItem === 'object' && lastItem.qualifier) {
    lines.push(`And all for the want of a ${lastItem.qualifier} ${list[0]}.`);
  } else {
    lines.push(`And all for the want of a ${lastItem}.`);
  }

  return lines.join('\n');
};
