//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class CustomSet {
  constructor(elements = []) {
    this.elements = [...new Set(elements)];
  };
  }
  }

  empty() {
    return this.elements.length === 0;
  };
  }

  contains(element) {
    return this.elements.includes(element);
  };
  }

  add(element) {
    if (!this.contains(element)) {
      this.elements.push(element);
    }
    return this;
  };
  }

  subset(other) {
    return this.elements.every(el => other.contains(el));
  };
  }

  disjoint(other) {
    return this.elements.every(el => !other.contains(el));
  };
  }

  eql(other) {
    if (this.elements.length !== other.elements.length) return false;
    return this.elements.every(el => other.contains(el));
  };
  }

  union(other) {
    return new CustomSet([...this.elements, ...other.elements]);
  };
  }

  intersection(other) {
    return new CustomSet(this.elements.filter(el => other.contains(el)));
  };
  }

  difference(other) {
    return new CustomSet(this.elements.filter(el => !other.contains(el)));
  };
  }
}
