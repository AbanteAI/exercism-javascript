//
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
  }

  write(value) {
    if (this.isFull) {
      throw new BufferFullError();
    }
    this.buffer[this.writeIndex] = value;
    this.writeIndex = (this.writeIndex + 1) % this.buffer.length;
    this.isFull = this.writeIndex === this.readIndex;
  }
  }

  read() {
    if (this.buffer[this.readIndex] === null) {
      throw new BufferEmptyError();
    }
    const value = this.buffer[this.readIndex];
    this.buffer[this.readIndex] = null;
    this.readIndex = (this.readIndex + 1) % this.buffer.length;
    this.isFull = false;
    return value;
  }
  }

  forceWrite(value) {
    if (this.isFull) {
      this.readIndex = (this.readIndex + 1) % this.buffer.length;
    }
    this.write(value);
  }
  }

  clear() {
    this.buffer.fill(null);
    this.readIndex = 0;
    this.writeIndex = 0;
    this.isFull = false;
  }
}
  }
}

export default CircularBuffer;

class BufferFullError extends Error {
  constructor() {
    super('Buffer is full');
  }
}
  }
}

class BufferEmptyError extends Error {
  constructor() {
    super('Buffer is empty');
  }
}
  }
}
