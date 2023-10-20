//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.buffer = new Array(size);
    this.readIndex = 0;
    this.writeIndex = 0;
    this.size = size;
  }

  write(value) {
    if (this.buffer[this.writeIndex] !== undefined) {
      throw new BufferFullError();
    }
    if (value !== undefined) {
      this.buffer[this.writeIndex] = value;
      this.writeIndex = (this.writeIndex + 1) % this.size;
    }
  }

  read() {
    if (this.buffer[this.readIndex] === undefined) {
      throw new BufferEmptyError();
    }
    const value = this.buffer[this.readIndex];
    this.buffer[this.readIndex] = undefined;
    this.readIndex = (this.readIndex + 1) % this.size;
    return value;
  }

  forceWrite(value) {
    if (value !== undefined) {
      if (this.buffer[this.writeIndex] !== undefined) {
        this.readIndex = (this.readIndex + 1) % this.size;
      }
      this.write(value);
    }
  }

  clear() {
    this.buffer.fill(undefined);
    this.readIndex = 0;
    this.writeIndex = 0;
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
