//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor() {
    this.values = [];
  }

  append(list) {
    const result = new List();
    result.values.push(...this.values, ...list.values);
    return result;
  }

  concat(lists) {
    const result = new List();
    for (const list of lists) {
      result.append(list);
    }
    return result;
  }

  filter(predicate) {
    const result = new List();
    for (const value of this.values) {
      if (predicate(value)) {
        result.values.push(value);
      }
    }
    return result;
  }

  map(fn) {
    const result = new List();
    for (const value of this.values) {
      result.values.push(fn(value));
    }
    return result;
  }

  length() {
    let count = 0;
    for (const _ of this.values) {
      count++;
    }
    return count;
  }

  foldl(fn, accumulator) {
    for (const value of this.values) {
      accumulator = fn(accumulator, value);
    }
    return accumulator;
  }

  foldr(fn, accumulator) {
    for (const value of this.values.reverse()) {
      accumulator = fn(value, accumulator);
    }
    return accumulator;
  }

  reverse() {
    const result = new List();
    for (const value of this.values) {
      result.values.unshift(value);
    }
    return result;
  }
}
