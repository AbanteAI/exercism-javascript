// Remove the import statement
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
constructor(size) {
    this.buffer = new Array(size).fill(null);
    this.readIndex = 0;
    this.writeIndex = 0;
}
  }

write(value) {
    if (this.buffer[this.writeIndex] !== null) {
        throw new BufferFullError();
    }
    this.buffer[this.writeIndex] = value;
    this.advanceWriteIndex();
}
  }

read() {
    if (this.buffer[this.readIndex] === null) {
        throw new BufferEmptyError();
    }
    const value = this.buffer[this.readIndex];
    this.buffer[this.readIndex] = null;
    this.advanceReadIndex();
    return value;
}
  }

forceWrite(value) {
    if (this.buffer[this.writeIndex] !== null) {
        this.advanceReadIndex();
    }
    this.buffer[this.writeIndex] = value;
    this.advanceWriteIndex();
}
  }

clear() {
    this.buffer.fill(null);
    this.readIndex = 0;
    this.writeIndex = 0;
}
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
    constructor() {
        super('Buffer is full');
        this.name = 'BufferFullError';
    }
}
class BufferFullError extends Error {
    constructor() {
        super('Buffer is full');
        this.name = 'BufferFullError';
    }
}
  }
}

export class BufferEmptyError extends Error {
    constructor() {
        super('Buffer is empty');
        this.name = 'BufferEmptyError';
    }
}
    constructor() {
        super('Buffer is empty');
        this.name = 'BufferEmptyError';
    }
}
    throw new Error('Remove this statement and implement this function');
  }
}
