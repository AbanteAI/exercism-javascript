//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(value, next = null) {
    this._value = value;
    this._next = next;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }
}

export class List {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  add(value) {
    const newElement = new Element(value);

    if (!this._head) {
      this._head = newElement;
    } else {
      let current = this._head;
      while (current.next) {
        current = current.next;
      }
      current._next = newElement;
    }

    this._length++;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    const array = [];
    let current = this._head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  reverse() {
    let previous = null;
    let current = this._head;
    while (current) {
      const next = current.next;
      current._next = previous;
      previous = current;
      current = next;
    }
    this._head = previous;
  }
}
export class List {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  add(value) {
    const newElement = new Element(value);

    if (!this._head) {
      this._head = newElement;
    } else {
      let current = this._head;
      while (current.next) {
        current = current.next;
      }
      current._next = newElement;
    }

    this._length++;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    const array = [];
    let current = this._head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  reverse() {
    let previous = null;
    let current = this._head;
    while (current) {
      const next = current.next;
      current._next = previous;
      previous = current;
      current = next;
    }
    this._head = previous;
  }
}

export class List {
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }

  add(nextValue) {
    throw new Error('Remove this statement and implement this function');
  }

  get length() {
    throw new Error('Remove this statement and implement this function');
  }

  get head() {
    throw new Error('Remove this statement and implement this function');
  }

  toArray() {
    throw new Error('Remove this statement and implement this function');
  }

  reverse() {
    throw new Error('Remove this statement and implement this function');
  }
}
