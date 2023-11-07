//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
  }

  get left() {
    return this._left;
  }

  set left(node) {
    this._left = node;
  }

  get right() {
    return this._right;
  }

  set right(node) {
    this._right = node;
  }

  insert(value) {
    if (value <= this.data) {
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
    callback(this.data);
    if (this.right !== null) {
      this.right.each(callback);
    }
  }
}
