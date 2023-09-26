//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
    
    constructor(arr = []) {
      this.list = arr;
    }
  }

  compare() {
    isSublist(a, b) {
      return a.every((v, i) => b[i] === v);
    }

    compare(otherList) {
      const a = this.list;
      const b = otherList.list;

      if (a.length === 0 && b.length === 0) {
        return 'equal';
      }

      if (a.length === 0) {
        return 'sublist';
      }

      if (b.length === 0) {
        return 'superlist';
      }

      for (let i = 0; i <= b.length - a.length; i++) {
        if (this.isSublist(a, b.slice(i))) {
          return 'sublist';
        }
      }

      for (let i = 0; i <= a.length - b.length; i++) {
        if (this.isSublist(b, a.slice(i))) {
          return 'superlist';
        }
      }

      return 'unequal';
    }
}
