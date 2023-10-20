//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

  constructor() {
    this.list = [];
  }
  append(list) {
    return this.list.concat(list);
  }

  concat(lists) {
    return lists.reduce((acc, list) => acc.concat(list), this.list);
  }

  filter(predicate) {
    const result = [];
    for (const item of this.list) {
      if (predicate(item)) {
        result.push(item);
      }
    }
    return result;
  }

  map(fn) {
    const result = [];
    for (const item of this.list) {
      result.push(fn(item));
    }
    return result;
  }

  length() {
    return this.list.length;
  }

  foldl(fn, acc) {
    return this.list.reduce((accumulator, item) => fn(accumulator, item), acc);
  }

  foldr(fn, acc) {
    return this.list.reduceRight((accumulator, item) => fn(item, accumulator), acc);
  }

  reverse() {
    const result = [];
    for (let i = this.list.length - 1; i >= 0; i--) {
      result.push(this.list[i]);
    }
    return result;
  }
}
