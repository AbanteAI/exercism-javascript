//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  constructor(tree, focus) {
    this.tree = tree;
    this.focus = focus;
  }

  static fromTree(tree) {
    return new Zipper(tree, tree);
  }

  toTree() {
    return this.tree;
  }

  value() {
    return this.focus.value;
  }

  prev() {
    return this.focus.prev ? new Zipper(this.tree, this.focus.prev) : null;
  }

  next() {
    return this.focus.next ? new Zipper(this.tree, this.focus.next) : null;
  }

  up() {
    return this.focus.parent ? new Zipper(this.tree, this.focus.parent) : null;
  }

  setValue(value) {
    this.focus.value = value;
    return this;
  }

  insertBefore(subTree) {
    subTree.next = this.focus;
    subTree.parent = this.focus.parent;
    this.focus.prev = subTree;
    return new Zipper(this.tree, subTree);
  }

  insertAfter(subTree) {
    subTree.prev = this.focus;
    subTree.parent = this.focus.parent;
    this.focus.next = subTree;
    return new Zipper(this.tree, subTree);
  delete() {
    if (this.focus.prev) {
      this.focus.prev.next = this.focus.next;
      return new Zipper(this.tree, this.focus.prev);
    } else if (this.focus.next) {
      this.focus.next.prev = this.focus.prev;
      return new Zipper(this.tree, this.focus.next);
    } else {
      return new Zipper(this.tree, this.focus.parent);
    }
  }
  }
}
