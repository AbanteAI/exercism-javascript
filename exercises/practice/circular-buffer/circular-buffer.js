//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.buffer = new Array(size).fill(null);
    this.head = 0;
    this.tail = 0;
    this.isFull = false;
  }

  write(value) {
    if (this.isFull) {
      throw new BufferFullError();
    }

    this.buffer[this.tail] = value;
    this.tail = (this.tail + 1) % this.buffer.length;

    if (this.tail === this.head) {
      this.isFull = true;
    }
  }

  read() {
    if (this.isEmpty()) {
      throw new BufferEmptyError();
    }

    const value = this.buffer[this.head];
    this.buffer[this.head] = null;
    this.head = (this.head + 1) % this.buffer.length;
    this.isFull = false;

    return value;
  }

  forceWrite(value) {
    if (this.isFull) {
      this.head = (this.head + 1) % this.buffer.length;
    }

    this.write(value);
  }

  clear() {
    this.buffer.fill(null);
    this.head = 0;
    this.tail = 0;
    this.isFull = false;
  }

  isEmpty() {
    return this.buffer.every((value) => value === null);
  }
}

export default CircularBuffer;

class BufferFullError extends Error {}

class BufferEmptyError extends Error {}
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    throw new Error('Remove this statement and implement this function');
  }
}
