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

  set next(elem) {
    this._next = elem;
  }
}

export class List {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  add(value) {
    const newElement = new Element(value, this._head);
    this._head = newElement;
    this._length++;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    let arr = [];
    let current = this._head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let current = this._head;
    let prev = null;
    let next = null;
    
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this._head = prev;
  }
}
