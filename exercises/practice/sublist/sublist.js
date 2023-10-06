//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(elements) {
    this.elements = elements || [];
  }

  compare(list) {
    if (this.equals(list)) {
      return 'EQUAL';
    } else if (this.isSublist(list)) {
      return 'SUBLIST';
    } else if (this.isSuperlist(list)) {
      return 'SUPERLIST';
    } else {
      return 'UNEQUAL';
    }
  }

  equals(list) {
    if (this.length !== list.length) {
      return false;
    }
    return this.elements.every((element, index) => element === list.elements[index]);
  }

  isSublist(list) {
    if (this.length > list.length) {
      return false;
    }
    for (let i = 0; i <= list.length - this.length; i++) {
      if (this.equals(list.slice(i, i + this.length))) {
        return true;
      }
    }
    return false;
  }

  isSuperlist(list) {
    return list.isSublist(this);
  }
}
