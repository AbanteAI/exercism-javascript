//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }

  compare(listA, listB) {
    if (listA.length === listB.length && listA.every((value, index) => value === listB[index])) {
      return 'equal';
    } else if (listA.every((value, index) => value === listB[index])) {
      return 'sublist';
    } else if (listB.every((value, index) => value === listA[index])) {
      return 'superlist';
    } else {
      return 'unequal';
    }
  }
      return 'equal';
    } else if (listA.every((value, index) => value === listB[index])) {
      return 'sublist';
    } else if (listB.every((value, index) => value === listA[index])) {
      return 'superlist';
    } else {
      return 'unequal';
    }
  }
  }
}
