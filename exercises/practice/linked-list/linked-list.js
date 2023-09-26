//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(station) {
    const newNode = {
      station,
      prev: null,
      next: null,
    };

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  pop() {
    if (this.tail === null) {
      throw new Error('The route is empty');
    }

    const removedNode = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;

    return removedNode.station;
  }

  shift() {
    if (this.head === null) {
      throw new Error('The route is empty');
    }

    const removedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;

    return removedNode.station;
  }

  unshift(station) {
    const newNode = {
      station,
      prev: null,
      next: null,
    };

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  delete(station) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.station === station) {
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

        this.size--;
        break;
      }

      currentNode = currentNode.next;
    }
  }

  count() {
    return this.size;
  }
}
}
