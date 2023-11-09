//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = { value, next: null, prev: null };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  pop() {
    if (!this.tail) return null;
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return value;
  }

  shift() {
    if (!this.head) return null;
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return value;
  }

  unshift(value) {
    const newNode = { value, next: null, prev: null };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  delete(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode.prev) currentNode.prev.next = currentNode.next;
        else this.head = currentNode.next;
        if (currentNode.next) currentNode.next.prev = currentNode.prev;
        else this.tail = currentNode.prev;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  count() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
}
