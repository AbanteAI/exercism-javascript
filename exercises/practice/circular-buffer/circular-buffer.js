//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.buffer = new Array(size);
    this.readPosition = 0;
    this.writePosition = 0;
  }

  write(value) {
    if (this.buffer[this.writePosition] !== undefined) {
      throw new BufferFullError();
    }
    this.buffer[this.writePosition] = value;
    this.writePosition = (this.writePosition + 1) % this.buffer.length;
  }

  read() {
    if (this.buffer[this.readPosition] === undefined) {
      throw new BufferEmptyError();
    }
    const value = this.buffer[this.readPosition];
    this.buffer[this.readPosition] = undefined;
    this.readPosition = (this.readPosition + 1) % this.buffer.length;
    return value;
  }

  forceWrite(value) {
    if (this.buffer[this.writePosition] !== undefined) {
      this.readPosition = (this.readPosition + 1) % this.buffer.length;
    }
    this.write(value);
  }

  clear() {
    this.buffer.fill(undefined);
    this.readPosition = 0;
    this.writePosition = 0;
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
