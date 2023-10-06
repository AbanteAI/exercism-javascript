//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  constructor(tree, focus = null, parent = null, left = null, right = null) {
    this.tree = tree;
    this.focus = focus;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }

  static fromTree(tree) {
    return new Zipper(tree);
  }

  toTree() {
    return this.tree;
  }

  value() {
    return this.focus?.value;
  }

  left() {
    return new Zipper(this.tree, this.left?.focus, this, this.left?.left, this.left?.right);
  }

  right() {
    return new Zipper(this.tree, this.right?.focus, this, this.right?.left, this.right?.right);
  }

  up() {
    return this.parent;
  }

  setValue(value) {
    return new Zipper(this.tree, { ...this.focus, value }, this.parent, this.left, this.right);
  }

  setLeft(left) {
    return new Zipper(this.tree, this.focus, this.parent, left, this.right);
  }

  setRight(right) {
    return new Zipper(this.tree, this.focus, this.parent, this.left, right);
  }
}
