//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor(elements = []) {
    this.set = Array.from(new Set(elements));
  }

  empty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element);
  }

  add(element) {
    if (!this.contains(element)) {
      this.set.push(element);
    }
    return this;
  }

  subset(otherSet) {
    return this.set.every((element) => otherSet.contains(element));
  }

  disjoint(otherSet) {
    return this.set.every((element) => !otherSet.contains(element));
  }

  eql(otherSet) {
    return this.subset(otherSet) && otherSet.subset(this);
  }

  union(otherSet) {
    const unionSet = new CustomSet(this.set);
    otherSet.set.forEach((element) => unionSet.add(element));
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new CustomSet();
    this.set.forEach((element) => {
      if (otherSet.contains(element)) {
        intersectionSet.add(element);
      }
    });
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new CustomSet();
    this.set.forEach((element) => {
      if (!otherSet.contains(element)) {
        differenceSet.add(element);
      }
    });
    return differenceSet;
  }
}
