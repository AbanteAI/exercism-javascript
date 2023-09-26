//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  constructor(tree, path = []) {
    this.tree = tree;
    this.path = path;
  }

  static fromTree(tree) {
    return new Zipper(tree);
  }

  toTree() {
    return this.tree;
  }

  value() {
    return this.tree.value;
  }

  left() {
    return this.tree.left ? new Zipper(this.tree.left, this.path.concat('L')) : null;
  }

  right() {
    return this.tree.right ? new Zipper(this.tree.right, this.path.concat('R')) : null;
  }

  up() {
    if (this.path.length === 0) return null;
    let current = this.tree;
    let path = this.path.slice(0, -1);
    let parent = path.reduce((tree, direction) => (direction === 'L' ? tree.left : tree.right), this.tree);
    if (this.path[this.path.length - 1] === 'L') {
      parent.right = current;
    } else {
      parent.left = current;
    }
    return new Zipper(parent, path);
  }

  setValue(value) {
    return new Zipper({ ...this.tree, value }, this.path);
  }

  setLeft(left) {
    return new Zipper({ ...this.tree, left }, this.path);
  }

  setRight(right) {
    return new Zipper({ ...this.tree, right }, this.path);
  }
  delete() {
    let path = this.path.slice(0, -1);
    let parent = path.reduce((tree, direction) => (direction === 'L' ? tree.left : tree.right), this.tree);
    if (this.path[this.path.length - 1] === 'L') {
      parent.left = null;
    } else {
      parent.right = null;
    }
    return new Zipper(parent, path);
  }
}
