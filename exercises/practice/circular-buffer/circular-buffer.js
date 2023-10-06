import { BufferFullError, BufferEmptyError } from './circular-buffer';
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.buffer = new Array(size).fill(null);
    this.readIndex = 0;
    this.writeIndex = 0;
    this.isFull = false;
  }

  write(value) {
    if (this.isFull) {
      throw new BufferFullError();
    }
    this.buffer[this.writeIndex] = value;
    this.writeIndex = (this.writeIndex + 1) % this.buffer.length;
    this.isFull = this.readIndex === this.writeIndex;
  }

  read() {
    if (this.isEmpty()) {
      throw new BufferEmptyError();
    }
    const value = this.buffer[this.readIndex];
    this.buffer[this.readIndex] = null;
    this.readIndex = (this.readIndex + 1) % this.buffer.length;
    this.isFull = false;
    return value;
  }

  forceWrite(value) {
    if (this.isFull) {
      this.readIndex = (this.readIndex + 1) % this.buffer.length;
    }
    this.write(value);
  }

  clear() {
    this.buffer.fill(null);
    this.readIndex = 0;
    this.writeIndex = 0;
    this.isFull = false;
  }

  isEmpty() {
    return !this.buffer.some((value) => value !== null);
  }
}

export default CircularBuffer;

class BufferFullError extends Error {}
class BufferEmptyError extends Error {}

export { BufferFullError, BufferEmptyError };


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
