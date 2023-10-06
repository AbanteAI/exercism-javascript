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
    return [...this.set].every(element => otherSet.contains(element));
  }

  disjoint(otherSet) {
    return ![...this.set].some(element => otherSet.contains(element));
  }

  eql(otherSet) {
    return this.set.size === otherSet.set.size && [...this.set].every(element => otherSet.contains(element));
  }

  union(otherSet) {
    const newSet = new CustomSet();
    [...this.set, ...otherSet.set].forEach(element => newSet.add(element));
    return newSet;
  }

  intersection(otherSet) {
    const newSet = new CustomSet();
    [...this.set].forEach(element => {
      if (otherSet.contains(element)) {
        newSet.add(element);
      }
    });
    return newSet;
  }

  difference(otherSet) {
    const newSet = new CustomSet();
    [...this.set].forEach(element => {
      if (!otherSet.contains(element)) {
        newSet.add(element);
      }
    });
    return newSet;
  }
}
