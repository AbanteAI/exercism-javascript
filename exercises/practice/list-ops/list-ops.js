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

  concat() {
    return this.foldl((acc, list) => acc.append(list), new List());
  }

  filter(predicate) {
    return this.foldl((acc, value) => (predicate(value) ? acc.append(new List([value])) : acc), new List());
  }

  length() {
    return this.foldl((acc) => acc + 1, 0);
  }

  map(mapper) {
    return this.foldl((acc, value) => acc.append(new List([mapper(value)])), new List());
  }

  foldl(reducer, initial) {
    let result = initial;
    for (const value of this.values) {
      result = reducer(result, value);
    }
    return result;
  }

  foldr(reducer, initial) {
    return this.reverse().foldl(reducer, initial);
  }

  reverse() {
    return new List([...this.values].reverse());
  }
}
