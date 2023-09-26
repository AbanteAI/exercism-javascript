//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(value, next = null) {
    this._value = value;
    this._next = next;
  }
  ;
  }

  get value() {
    return this._value;

  get next() {
    return this._next;
}

export class List {
  constructor() {
    this._head = null;
    this._length = 0;
  }
  ;
  }

  add(nextValue) {
    const newElement = new Element(nextValue, this._head);
    this._head = newElement;
    this._length++;

  get length() {
    return this._length;

  get head() {
    return this._head;

  toArray() {
    const array = [];
    let currentNode = this._head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;

  reverse() {
    let prev = null;
    let current = this._head;
    let next = null;
    while (current !== null) {
      next = current.next;
      current._next = prev;
      prev = current;
      current = next;
    }
    this._head = prev;
    return this;
}
