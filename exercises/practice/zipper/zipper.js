//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  constructor(tree, focus = null, parent = null) {
    this.tree = tree;
    this.focus = focus || tree;
    this.parent = parent;
  }

  static fromTree(tree) {
    return new Zipper(tree);
  }

  toTree() {
    return this.tree;
  }

  value() {
    return this.focus.value;
  }

  left() {
    if (!this.focus.left) {
      return null;
    }
    return new Zipper(this.tree, this.focus.left, this);
  }

  right() {
    if (!this.focus.right) {
      return null;
    }
    return new Zipper(this.tree, this.focus.right, this);
  }

  up() {
    if (!this.parent) {
      return null;
    }
    return new Zipper(this.tree, this.parent, this.parent.parent);
  }

  setValue(value) {
    this.focus.value = value;
    return this;
  }

  setLeft(tree) {
    this.focus.left = tree;
    return this;
  }

  setRight(tree) {
    this.focus.right = tree;
    return this;
  }
}
