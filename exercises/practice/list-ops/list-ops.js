//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list = []) {
    this.list = list;
  }
  }
  append(otherList) {
    return new List([...this.list, ...otherList.list]);
  };
    return new List([...this.list, ...otherList.list]);
  }
  }

  concatenate() {
    return new List(this.list.reduce((acc, curr) => [...acc, ...curr.list], []));
  }
  }

  filter(predicate) {
    return new List(this.list.filter(predicate));
  }
  }

  length() {
    return this.list.length;
  }
  }

  map(mapping) {
    return new List(this.list.map(mapping));
  }
  }

  foldl(reducer, initialValue) {
    let accumulator = initialValue;
    for (const item of this.list) {
      accumulator = reducer(accumulator, item);
    }
    return accumulator;
  }
  }

  foldr(reducer, initialValue) {
    let accumulator = initialValue;
    for (let i = this.list.length - 1; i >= 0; i--) {
      accumulator = reducer(this.list[i], accumulator);
    }
    return accumulator;
  }
  }

  reverse() {
    return new List([...this.list].reverse());
  }
  }
}
