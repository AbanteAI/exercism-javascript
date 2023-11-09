//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.buffer = new Array(size);
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
    if (this.head === this.tail) this.isFull = true;
  }

  read() {
    if (this.head === this.tail && !this.isFull) {
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
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    super('Buffer is full');
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super('Buffer is empty');
  }
}
