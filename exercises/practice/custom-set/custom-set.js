//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor() {
    this.set = new Set();
  }
  }

  empty() {
    return this.set.size === 0;
  }
  }

  contains(element) {
    return this.set.has(element);
  }
  }

  add(element) {
    this.set.add(element);
    return this;
  }
  }

  subset(otherSet) {
    for (const element of this.set) {
      if (!otherSet.contains(element)) {
        return false;
      }
    }
    return true;
  }
  }

  disjoint(otherSet) {
    for (const element of this.set) {
      if (otherSet.contains(element)) {
        return false;
      }
    }
    return true;
  }
  }

  eql(otherSet) {
    if (this.set.size !== otherSet.set.size) {
      return false;
    }
    for (const element of this.set) {
      if (!otherSet.contains(element)) {
        return false;
      }
    }
    return true;
  }
  }

  union(otherSet) {
    const newSet = new CustomSet();
    for (const element of this.set) {
      newSet.add(element);
    }
    for (const element of otherSet.set) {
      newSet.add(element);
    }
    return newSet;
  }
  }

  intersection(otherSet) {
    const newSet = new CustomSet();
    for (const element of this.set) {
      if (otherSet.contains(element)) {
        newSet.add(element);
      }
    }
    return newSet;
  }
  }

  difference(otherSet) {
    const newSet = new CustomSet();
    for (const element of this.set) {
      if (!otherSet.contains(element)) {
        newSet.add(element);
      }
    }
    return newSet;
  }
  }
}
