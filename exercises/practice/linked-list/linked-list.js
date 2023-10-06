//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = { value, next: null, prev: null };

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    if (this.head === null) {
      return undefined;
    }

    const value = this.tail.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;

    return value;
  }

  shift() {
    if (this.head === null) {
      return undefined;
    }

    const value = this.head.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;

    return value;
  }

  unshift(value) {
    const newNode = { value, next: null, prev: null };

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  delete(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.head = currentNode.next;
          if (this.head !== null) {
            this.head.prev = null;
          }
        } else if (currentNode === this.tail) {
          this.tail = currentNode.prev;
          if (this.tail !== null) {
            this.tail.next = null;
          }
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }

        this.length--;
        break;
      }

      currentNode = currentNode.next;
    }
  }

  count() {
    return this.length;
  }
}
