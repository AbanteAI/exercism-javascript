//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(size) {
    this.buffer = new Array(size);
    this.size = size;
    this.start = 0;
    this.end = 0;
    this.count = 0;
  }

  write(element) {
    if (this.count === this.size) throw new BufferFullError();
    this.buffer[this.end] = element;
    this.end = (this.end + 1) % this.size;
    this.count++;
  }

  read() {
    if (this.count === 0) throw new BufferEmptyError();
    const element = this.buffer[this.start];
    this.start = (this.start + 1) % this.size;
    this.count--;
    return element;
  }

  forceWrite(element) {
    if (this.count === this.size) {
      this.start = (this.start + 1) % this.size; // Overwrite the oldest element
    } else {
      this.count++;
    }
    this.buffer[this.end] = element;
    this.end = (this.end + 1) % this.size;
  }

  clear() {
    this.start = 0;
    this.end = 0;
    this.count = 0;
  }
}

export default CircularBuffer;


export class BufferFullError extends Error {
  constructor(message = 'Buffer full error') {
    super(message);
    this.name = 'BufferFullError';
  }
}
  }
}

export class BufferEmptyError extends Error {
  constructor(message = 'Buffer empty error') {
    super(message);
    this.name = 'BufferEmptyError';
  }
}
  }
}
