//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
    constructor() {
      this.set = new Set();
    }

    empty() {
      return this.set.size === 0;
    }

    contains(element) {
      return this.set.has(element);
    }

    add(element) {
      this.set.add(element);
      return this;
    }

    subset(otherSet) {
      for (let elem of this.set) {
        if (!otherSet.contains(elem)) return false;
      }
      return true;
    }

    disjoint(otherSet) {
      for (let elem of this.set) {
        if (otherSet.contains(elem)) return false;
      }
      return true;
    }

    eql(otherSet) {
      if (this.set.size !== otherSet.set.size) return false;
      return this.subset(otherSet);
    }

    union(otherSet) {
      const resultSet = new CustomSet();
      for (let elem of this.set) {
        resultSet.add(elem);
      }
      for (let elem of otherSet.set) {
        resultSet.add(elem);
      }
      return resultSet;
    }

    intersection(otherSet) {
      const resultSet = new CustomSet();
      for (let elem of this.set) {
        if (otherSet.contains(elem)) {
          resultSet.add(elem);
        }
      }
      return resultSet;
    }

    difference(otherSet) {
      const resultSet = new CustomSet();
      for (let elem of this.set) {
        if (!otherSet.contains(elem)) {
          resultSet.add(elem);
        }
      }
      return resultSet;
    }
}
