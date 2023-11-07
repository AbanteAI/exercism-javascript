//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  constructor(tree, focus, ancestry) {
    this.tree = tree;
    this.focus = focus;
    this.ancestry = ancestry || [];
  }

  static fromTree(tree) {
    return new Zipper(tree, tree);
  }

  toTree() {
    if (this.ancestry.length === 0) return this.focus;
    const topAncestor = this.ancestry[0];
    return topAncestor.tree;
  }

  value() {
    return this.focus.value;
  }

  left() {
    if (!this.focus.left) return null;
    const newAncestry = [{ tree: this.focus, direction: 'left' }, ...this.ancestry];
    return new Zipper(this.tree, this.focus.left, newAncestry);
  }

  right() {
    if (!this.focus.right) return null;
    const newAncestry = [{ tree: this.focus, direction: 'right' }, ...this.ancestry];
    return new Zipper(this.tree, this.focus.right, newAncestry);
  }

  up() {
    if (this.ancestry.length === 0) return null;
    const [parentRecord, ...newAncestry] = this.ancestry;
    return new Zipper(this.tree, parentRecord.tree, newAncestry);
  }

  setValue(value) {
    const newFocus = { ...this.focus, value };
    return new Zipper(this.tree, newFocus, this.ancestry);
  }

  setLeft(left) {
    const newFocus = { ...this.focus, left };
    return new Zipper(this.tree, newFocus, this.ancestry);
  }

  setRight(right) {
    const newFocus = { ...this.focus, right };
    return new Zipper(this.tree, newFocus, this.ancestry);
  }
}
