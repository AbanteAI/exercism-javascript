//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(elements) {
    this.elements = elements;
  }

  compare(otherList) {
    if (this.elements.length === 0 && otherList.elements.length === 0) {
      return 'EQUAL';
    } else if (this.elements.length === 0) {
      return 'SUBLIST';
    } else if (otherList.elements.length === 0) {
      return 'SUPERLIST';
    } else if (this.isSublist(otherList)) {
      if (this.elements.length === otherList.elements.length) {
        return 'EQUAL';
      } else if (this.elements.length < otherList.elements.length) {
        return 'SUBLIST';
      } else {
        return 'SUPERLIST';
      }
    } else {
      return 'UNEQUAL';
    }
  }

  isSublist(otherList) {
    if (this.elements.length > otherList.elements.length) {
      return false;
    }
    for (let i = 0; i <= otherList.elements.length - this.elements.length; i++) {
      if (this.elements.every((element, index) => element === otherList.elements[i + index])) {
        return true;
      }
    }
    return false;
  }

  isEqual(otherList) {
    if (this.elements.length !== otherList.elements.length) {
      return false;
    }
    return this.elements.every((element, index) => element === otherList.elements[index]);
  }
    }
  }

  isSublist(otherList) {
    for (let i = 0; i <= otherList.elements.length - this.elements.length; i++) {
      if (this.elements.every((element, index) => element === otherList.elements[i + index])) {
        return true;
      }
    }
    return false;
  }

  isEqual(otherList) {
    return this.elements.every((element, index) => element === otherList.elements[index]);
  }
}
