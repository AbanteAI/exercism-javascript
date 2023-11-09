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
    this._head = new Element(value, this._head);
    this._length++;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  toArray() {
    const result = [];
    let currentNode = this._head;
    while (currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return result;
  }

  reverse() {
    let prevNode = null;
    let currentNode = this._head;

    while (currentNode !== null) {
      const nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this._head = prevNode;
    return this;
  }
}
