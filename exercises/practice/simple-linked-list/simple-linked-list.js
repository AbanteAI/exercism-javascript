//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(value, next = null) {
    this._value = value;
    this._next = next;
  }
  }

  }
    return this._value;
  }

  get next() {
    return this._next;
  }
}

export class List {
  constructor() {
    this._head = null;
  }

  add(value) {
    const newElement = new Element(value, this._head);
    this._head = newElement;
  }

  get length() {
    let count = 0;
    let current = this._head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  get head() {
    return this._head;
  }

  toArray() {
    const result = [];
    let current = this._head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  reverse() {
    let prev = null;
    let current = this._head;
    while (current) {
      const next = current.next;
      current._next = prev;
      prev = current;
      current = next;
    }
    this._head = prev;
  }
}
