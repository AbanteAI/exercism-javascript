//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor() {
    this.values = [];

    for (const value of list.values) {
      this.values.push(value);
    }
  }

  concat() {
    for (const sublist of lists) {
      for (const value of sublist.values) {
        this.values.push(value);
      }
    }

    filter() {
    filter() {
      ;
    }
    const filteredList = new List();
    for (const value of this.values) {
      if (predicate(value)) {
        filteredList.values.push(value);
      }
    }
    return filteredList;

    const mappedList = new List();
    for (const value of this.values) {
      mappedList.values.push(mapper(value));
    }
    return mappedList;
  }

    let count = 0;
    for (const _ of this.values) {
      count++;
    }
    return count;
  }

    let accumulator = initial;
    for (const value of this.values) {
      accumulator = reducer(accumulator, value);
    }
    return accumulator;
  }

    let accumulator = initial;
    for (let i = this.values.length - 1; i >= 0; i--) {
      accumulator = reducer(this.values[i], accumulator);
    }
    return accumulator;
  }

    const reversedList = new List();
    for (let i = this.values.length - 1; i >= 0; i--) {
      reversedList.values.push(this.values[i]);
    }
    return reversedList;
  }
}
