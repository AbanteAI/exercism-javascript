//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    this.length++;
  }

  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    const poppedNode = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode.value;
  }

  shift() {
    if (!this.head) {
      throw new Error("List is empty");
    }
    const shiftedNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode.value;
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
    this.length++;
  }

  delete(value) {
    if (!this.head) {
      throw new Error("List is empty");
    }
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.shift();
        } else if (currentNode === this.tail) {
          this.pop();
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
          currentNode.prev = null;
          currentNode.next = null;
          this.length--;
        }
        break;
      }
      currentNode = currentNode.next;
    }
  }

  count() {
    return this.length;
  }
}

  pop() {
    throw new Error('Remove this statement and implement this function');
  }

  shift() {
    throw new Error('Remove this statement and implement this function');
  }

  unshift() {
    throw new Error('Remove this statement and implement this function');
  }

  delete() {
    throw new Error('Remove this statement and implement this function');
  }

  count() {
    throw new Error('Remove this statement and implement this function');
  }
}
