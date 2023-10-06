//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this.list = list || [];
  }
  compare(otherList) {

  compare(otherList) {
    if (this.list.join(',') === otherList.list.join(',')) {
      return 'EQUAL';
    } else if (this.list.every((elem, index) => elem === otherList.list[index])) {
      return 'SUBLIST';
    } else if (otherList.list.every((elem, index) => elem === this.list[index])) {
      return 'SUPERLIST';
    } else {
      return 'UNEQUAL';
    }
  }
}
  ;
  }
  compare() {
    throw new Error('Remove this statement and implement this function');
  }
}
}
