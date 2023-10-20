//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(arr = []) {
    this.arr = arr;
  };
  }

  compare(otherList) {
    const listA = this.arr;
    const listB = otherList.arr;

    const isSublist = (a, b) => a.join(',') === b.slice(0, a.length).join(',');
    const isSuperlist = (a, b) => isSublist(b, a);

    if (listA.length === 0 && listB.length === 0) {
      return 'equal';
    }

    if (isSublist(listA, listB)) {
      return 'sublist';
    }

    if (isSuperlist(listA, listB)) {
      return 'superlist';
    }

    return 'unequal';
  }
}
