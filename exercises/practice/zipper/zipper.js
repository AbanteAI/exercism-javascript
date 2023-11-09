//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  constructor(tree, path) {
    this.tree = tree;
    this.path = path;
  }
  }

  fromTree(tree) {
    return new Zipper(tree, []);
  }
  }

  toTree() {
    return this.tree;
  }
  }

  value() {
    return this.tree.value;
  }
  }

  left() {
    return this.tree.left ? new Zipper(this.tree.left, this.path.concat(this.tree)) : null;
  }
  }

  right() {
    return this.tree.right ? new Zipper(this.tree.right, this.path.concat(this.tree)) : null;
  }
  }

  up() {
    if (!this.path.length) return null;
    const newPath = this.path.slice(0, -1);
    const parent = this.path[this.path.length - 1];
    return new Zipper(parent, newPath);
  }
  }

  setValue(value) {
    this.tree.value = value;
    return this;
  }
  }

  setLeft(left) {
    this.tree.left = left;
    return this;
  }
  }

  setRight(right) {
    this.tree.right = right;
    return this;
  }
  }
  delete() {
    const newPath = this.path.slice(0, -1);
    const parent = this.path[this.path.length - 1];
    if (parent.left === this.tree) {
      parent.left = this.tree.right;
    } else {
      parent.right = this.tree.left;
    }
    return new Zipper(parent, newPath);
  }
}
