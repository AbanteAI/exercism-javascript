//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
    constructor() {
      this.values = [];
    }

  append(newList) {
    const appended = new List();
    appended.values = [...this.values, ...newList.values];
    return appended;
  }

  concat(lists) {
    for (const list of lists) {
      this.append(list);
    }
  }

  filter(predicate) {
    const filtered = new List();
    for (const value of this.values) {
      if (predicate(value)) {
        filtered.values.push(value);
      }
    }
    return filtered;
  }

  map(func) {
    const mapped = new List();
    for (const value of this.values) {
      mapped.values.push(func(value));
    }
    return mapped;
  }

  length() {
    let count = 0;
    for (const _ of this.values) {
      count++;
    }
    return count;
  }

  foldl(func, acc) {
    for (const value of this.values) {
      acc = func(acc, value);
    }
    return acc;
  }

  foldr(func, acc) {
    for (const value of this.reverse().values) {
      acc = func(value, acc);
    }
    return acc;
  }

  reverse() {
    const reversed = new List();
    for (const value of this.values) {
      reversed.values.unshift(value);
    }
    return reversed;
  }
}
