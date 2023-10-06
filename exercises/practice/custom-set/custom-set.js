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

  contains() {
    return this.set.has(element);
  }

  add() {
    this.set.add(element);
  }

  subset() {
    return isSubset;
  }

  disjoint() {
    return isDisjoint;
  }

  eql() {
    return isEqual;
  }

  union() {
    return newSet;
  }

  intersection() {
    return newSet;
  }

  difference() {
    return newSet;
  }
}
