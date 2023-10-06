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
      let currentElement = this._head;
      while (currentElement.next) {
        currentElement = currentElement.next;
      }
      currentElement._next = newElement;
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
    let currentElement = this._head;
    while (currentElement) {
      array.push(currentElement.value);
      currentElement = currentElement.next;
    }
    return array;
  }

  reverse() {
    let prevElement = null;
    let currentElement = this._head;
    while (currentElement) {
      const nextElement = currentElement.next;
      currentElement._next = prevElement;
      prevElement = currentElement;
      currentElement = nextElement;
    }
    this._head = prevElement;
  }
}
