//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (sortedList, item) => {
  let left = 0;
  let right = sortedList.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (sortedList[middle] === item) {
      return middle;
    }

    if (sortedList[middle] < item) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  throw new Error('Value not in array');
};
