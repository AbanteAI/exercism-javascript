//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(elements = []) {
    this.elements = elements;
  }
  };

  compare(otherList) {
    const thisListStr = this.elements.join(',');
    const otherListStr = otherList.elements.join(',');

    if (thisListStr === otherListStr) {
      return 'EQUAL';
    } else if (thisListStr.length && otherListStr.includes(thisListStr)) {
      return 'SUBLIST';
    } else if (otherListStr.length && thisListStr.includes(otherListStr)) {
      return 'SUPERLIST';
    } else {
      return 'UNEQUAL';
    }
  }
  };
  }
}
