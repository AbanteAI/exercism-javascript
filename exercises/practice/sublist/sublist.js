//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
    constructor(arr = []) {
        this.arr = arr;
    }
  }

    compare(other) {
        const isSublist = (a, b) => a.every((v, i) => v === b[i]);
        const isSuperlist = (a, b) => a.some((_, i) => isSublist(b, a.slice(i)));

        if (isSublist(this.arr, other.arr) && isSublist(other.arr, this.arr)) {
            return "EQUAL";
        } else if (isSublist(this.arr, other.arr)) {
            return "SUBLIST";
        } else if (isSuperlist(this.arr, other.arr)) {
            return "SUPERLIST";
        } else {
            return "UNEQUAL";
        }
    }
  }
}
