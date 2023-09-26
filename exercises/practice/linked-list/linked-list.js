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
    const newNode = { value, prev: null, next: null };

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
  }

  pop() {
    if (!this.head) {
      return null;
    }

    const poppedNode = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
    }

    this.length--;

    return poppedNode.value;
  }
  }

  shift() {
    if (!this.head) {
      return null;
    }

    const shiftedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
    }

    this.length--;

    return shiftedNode.value;
  }
  }

  unshift(value) {
    const newNode = { value, prev: null, next: null };

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
  }

  delete(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          this.head = currentNode.next;
          if (this.head) {
            this.head.prev = null;
          }
        } else if (currentNode === this.tail) {
          this.tail = currentNode.prev;
          this.tail.next = null;
        } else {
          const prevNode = currentNode.prev;
          const nextNode = currentNode.next;
          prevNode.next = nextNode;
          nextNode.prev = prevNode;
        }

        this.length--;
        break;
      }

      currentNode = currentNode.next;
    }
  }
  }

  count() {
    return this.length;
  }
  }
}
