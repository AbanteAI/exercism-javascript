//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor() {
    this.set = [];
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
  }

  subset(otherSet) {
    return this.set.every(element => otherSet.contains(element));
  }

  disjoint(otherSet) {
    return this.set.every(element => !otherSet.contains(element));
  }

  eql(otherSet) {
    return this.subset(otherSet) && otherSet.subset(this);
  }

  union(otherSet) {
    const resultSet = new CustomSet();
    this.set.forEach(element => resultSet.add(element));
    otherSet.set.forEach(element => resultSet.add(element));
    return resultSet;
  }

  intersection(otherSet) {
    const resultSet = new CustomSet();
    this.set.forEach(element => {
      if (otherSet.contains(element)) {
        resultSet.add(element);
      }
    });
    return resultSet;
  }

  difference(otherSet) {
    const resultSet = new CustomSet();
    this.set.forEach(element => {
      if (!otherSet.contains(element)) {
        resultSet.add(element);
      }
    });
    return resultSet;
  }
}
