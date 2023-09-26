//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
  constructor(data) {
    this._data = data;
    this._left = null;
    this._right = null;
  }

  get data() {
    return this._data;
  }
  get right() {
    return this._right;
  }

  get left() {
    return this._left;
  }

  insert(value) {
    if (value <= this.data) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this._left = new BinarySearchTree(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this._right = new BinarySearchTree(value);
      }
    }
  }

  each(callback) {
    if (this.left) {
      this.left.each(callback);
    }
    callback(this.data);
    if (this.right) {
      this.right.each(callback);
    }
  }
}
