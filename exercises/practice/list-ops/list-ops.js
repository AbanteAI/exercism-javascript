//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(elements = []) {
    this.values = elements;
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concatenate(listOfLists) {
    let concatenated = new List(this.values);
    for (let i = 0; i < listOfLists.length(); i++) {
      concatenated = concatenated.append(listOfLists.values[i]);
    }
    return concatenated;
  }

  filter(predicate) {
    let filtered = [];
    for (let item of this.values) {
      if (predicate(item)) {
        filtered.push(item);
      }
    }
    return new List(filtered);
  }

  length() {
    let count = 0;
    for (let item of this.values) {
      count++;
    }
    return count;
  }

  map(func) {
    let mapped = [];
    for (let item of this.values) {
      mapped.push(func(item));
    }
    return new List(mapped);
  }

  foldl(func, accumulator) {
    for (let item of this.values) {
      accumulator = func(accumulator, item);
    }
    return accumulator;
  }

  foldr(func, accumulator) {
    for (let i = this.length() - 1; i >= 0; i--) {
      accumulator = func(this.values[i], accumulator);
    }
    return accumulator;
  }

  reverse() {
    let reversed = [];
    for (let i = this.length() - 1; i >= 0; i--) {
      reversed.push(this.values[i]);
    }
    return new List(reversed);
  }
}
