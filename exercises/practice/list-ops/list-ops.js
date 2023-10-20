//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
export class List {
  constructor(list = []) {
    this.list = list;
  }

  append(otherList) {
    return new List([...this.list, ...otherList.list]);
  }

  concat() {
    return new List(this.list.reduce((acc, curr) => [...acc, ...curr.list], []));
  }

  filter(predicate) {
    return new List(this.list.filter(predicate));
  }

  length() {
    return this.list.length;
  }

  map(fn) {
    return new List(this.list.map(fn));
  }

  foldl(fn, initial) {
    return this.list.reduce(fn, initial);
  }

  foldr(fn, initial) {
    return this.list.reduceRight(fn, initial);
  }

  reverse() {
    return new List([...this.list].reverse());
  }
}
}
