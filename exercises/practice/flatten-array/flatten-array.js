//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (nestedList) => {
  const flattenedList = [];

  const flattenHelper = (list) => {
    for (const item of list) {
      if (Array.isArray(item)) {
        flattenHelper(item);
      } else if (item !== null && item !== undefined) {
        flattenedList.push(item);
      }
    }
  };

  flattenHelper(nestedList);

  return flattenedList;
};
  const flattenHelper = (list) => {
    for (const item of list) {
      if (Array.isArray(item)) {
        flattenHelper(item);
      } else if (item !== null && item !== undefined) {
        flattenedList.push(item);
      }
    }
  };

  flattenHelper(nestedList);

  return flattenedList;
};
