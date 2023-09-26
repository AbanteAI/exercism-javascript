//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  get data() {
    return this.value;
  }


  insert(value) {
    if (value <= this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  each(callback) {
    if (this.left !== null) {
      this.left.each(callback);
    }
    callback(this.value);
    if (this.right !== null) {
      this.right.each(callback);
    }
  }
}

  get right() {
    throw new Error('Remove this statement and implement this function');
  }

  get left() {
    throw new Error('Remove this statement and implement this function');
  }

  insert() {
    throw new Error('Remove this statement and implement this function');
  }

  each() {
    throw new Error('Remove this statement and implement this function');
  }
}
