//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list) {
    this.list = list;
  }

  compare(otherList) {
    if (this.list.length === otherList.length) {
      if (JSON.stringify(this.list) === JSON.stringify(otherList)) {
        return "equal";
      }
    } else if (this.list.length < otherList.length) {
      if (isSublist(this.list, otherList)) {
        return "sublist";
      }
    } else if (this.list.length > otherList.length) {
      if (isSublist(otherList, this.list)) {
        return "superlist";
      }
    }
    return "unequal";
  }

  isSublist(sublist, list) {
    for (let i = 0; i <= list.length - sublist.length; i++) {
      if (list.slice(i, i + sublist.length).join() === sublist.join()) {
        return true;
      }
    }
    return false;
  }
  }

  compare(otherList) {
    if (this.list.length === otherList.length) {
      if (JSON.stringify(this.list) === JSON.stringify(otherList)) {
        return "equal";
      }
    } else if (this.list.length < otherList.length) {
      if (isSublist(this.list, otherList)) {
        return "sublist";
      }
    } else if (this.list.length > otherList.length) {
      if (isSublist(otherList, this.list)) {
        return "superlist";
      }
    }
    return "unequal";
  }

  isSublist(sublist, list) {
    for (let i = 0; i <= list.length - sublist.length; i++) {
      if (list.slice(i, i + sublist.length).join() === sublist.join()) {
        return true;
      }
    }
    return false;
  }
}
