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

  prev() {
    if (!this.parent) {
      return null;
    }

    const index = this.parent.children.indexOf(this.focus);
    if (index > 0) {
      return new Zipper(this.tree, this.parent.children[index - 1], this.parent);
    }

    return null;
  }

  next() {
    if (!this.parent) {
      return null;
    }

    const index = this.parent.children.indexOf(this.focus);
    if (index < this.parent.children.length - 1) {
      return new Zipper(this.tree, this.parent.children[index + 1], this.parent);
    }

    return null;
  }

  up() {
    return this.parent ? new Zipper(this.tree, this.parent, this.parent.parent) : null;
  }

  setValue(value) {
    this.focus.value = value;
    return this;
  }

  insertBefore(value) {
    const newNode = { value, children: [this.focus] };
    if (this.parent) {
      const index = this.parent.children.indexOf(this.focus);
      this.parent.children.splice(index, 0, newNode);
    } else {
      this.tree = newNode;
    }
    return new Zipper(this.tree, newNode, this.parent);
  }

  insertAfter(value) {
    const newNode = { value, children: [] };
    if (this.parent) {
      const index = this.parent.children.indexOf(this.focus);
      this.parent.children.splice(index + 1, 0, newNode);
    } else {
      this.tree = newNode;
    }
    return new Zipper(this.tree, newNode, this.parent);
  }

  delete() {
    if (!this.parent) {
      return null;
    }

    const index = this.parent.children.indexOf(this.focus);
    this.parent.children.splice(index, 1);

    if (index < this.parent.children.length) {
      return new Zipper(this.tree, this.parent.children[index], this.parent);
    } else if (index > 0) {
      return new Zipper(this.tree, this.parent.children[index - 1], this.parent);
    } else {
      return new Zipper(this.tree, this.parent, this.parent.parent);
    }
  }
}
