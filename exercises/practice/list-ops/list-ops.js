//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    return new List([...this.values, ...list.values]);
  }

  concatenate(lists) {
    const concatenatedValues = lists.reduce((acc, list) => [...acc, ...list.values], this.values);
    return new List(concatenatedValues);
  }

  filter(predicate) {
    const filteredValues = this.values.filter(predicate);
    return new List(filteredValues);
  }

  length() {
    return this.values.length;
  }

  map(fn) {
    const mappedValues = this.values.map(fn);
    return new List(mappedValues);
  }

  foldl(fn, acc) {
    let result = acc;
    for (const value of this.values) {
      result = fn(result, value);
    }
    return result;
  }

  foldr(fn, acc) {
    let result = acc;
    for (let i = this.values.length - 1; i >= 0; i--) {
      result = fn(this.values[i], result);
    }
    return result;
  }

  reverse() {
    const reversedValues = [...this.values].reverse();
    return new List(reversedValues);
  }
}
  }

  append() {
    throw new Error('Remove this statement and implement this function');
  }

  concat() {
    throw new Error('Remove this statement and implement this function');
  }

  filter() {
    throw new Error('Remove this statement and implement this function');
  }

  map() {
    throw new Error('Remove this statement and implement this function');
  }

  length() {
    throw new Error('Remove this statement and implement this function');
  }

  foldl() {
    throw new Error('Remove this statement and implement this function');
  }

  foldr() {
    throw new Error('Remove this statement and implement this function');
  }

  reverse() {
    throw new Error('Remove this statement and implement this function');
  }
}
