//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (list, target) => {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (list[middle] === target) {
      return middle;
    } else if (list[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};
