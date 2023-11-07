//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  };

  createNode(value) {
    return { value, next: null, prev: null };
  };

  push(value) {
    const node = this.createNode(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  };
  }
  }

  pop() {
    if (this.size === 0) {
      throw new Error('The list is empty');
    }
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.size--;
    return value;
  };
  }

  shift() {
    if (this.size === 0) {
      throw new Error('The list is empty');
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.size--;
    return value;
  };
  }

  unshift(value) {
    const node = this.createNode(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  };
  }

  delete(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.head = current.next;
        }
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }
        this.size--;
        return;
      }
      current = current.next;
    }
  };
  }

  count() {
    return this.size;
  };
  }
}
