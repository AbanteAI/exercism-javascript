//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
export class List {
  constructor(items = []) {
    this.items = items;
  }

  append(list) {
    return new List([...this.items, ...list.items]);
  }

  concatenate(lists) {
    let flattened = [];
    for (let list of lists.items) {
      flattened.push(...list.items);
    }
    return new List(flattened);
  }

  filter(predicate) {
    let filtered = [];
    for (let item of this.items) {
      if (predicate(item)) {
        filtered.push(item);
      }
    }
    return new List(filtered);
  }

  length() {
    let count = 0;
    for (let item of this.items) {
      count++;
    }
    return count;
  }

  map(func) {
    let mapped = [];
    for (let item of this.items) {
      mapped.push(func(item));
    }
    return new List(mapped);
  }

  foldl(func, initial) {
    let accumulator = initial;
    for (let item of this.items) {
      accumulator = func(accumulator, item);
    }
    return accumulator;
  }

  foldr(func, initial) {
    let accumulator = initial;
    for (let i = this.items.length - 1; i >= 0; i--) {
      accumulator = func(this.items[i], accumulator);
    }
    return accumulator;
  }

  reverse() {
    let reversed = [];
    for (let i = this.items.length - 1; i >= 0; i--) {
      reversed.push(this.items[i]);
    }
    return new List(reversed);
  }
}
