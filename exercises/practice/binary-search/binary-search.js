//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (arr, target) => {
  const search = (start, end) => {
    if (start > end) {
      return -1;
    }
    
    const mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      return search(start, mid - 1);
    } else {
      return search(mid + 1, end);
    }
  };
  
  return search(0, arr.length - 1);
};
