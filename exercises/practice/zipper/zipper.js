//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  constructor(value, left = null, right = null, parent = null) {
    this._value = value;
    this._left = left;
    this._right = right;
    this._parent = parent;
  }
  }

  static fromTree(tree) {
    if (!tree) {
      return null;
    }

    const root = new Zipper(tree.value);
    root._left = Zipper.fromTree(tree.left);
    root._right = Zipper.fromTree(tree.right);

    if (root._left) {
      root._left._parent = root;
    }

    if (root._right) {
      root._right._parent = root;
    }

    return root;
  }
  }

  toTree() {
    let node = this;
    while (node._parent) {
      node = node._parent;
    }
    return node;
  }
  }

  value() {
    return this._value;
  }
  }

  prev() {
    if (!this._parent) {
      return null;
    }

    const siblings = this._parent._left === this ? this._parent._right : this._parent._left;
    if (!siblings) {
      return null;
    }

    let node = siblings;
    while (node._right) {
      node = node._right;
    }

    return node;
  }
  }

  next() {
    if (!this._parent) {
      return null;
    }

    const siblings = this._parent._left === this ? this._parent._right : this._parent._left;
    if (!siblings) {
      return null;
    }

    let node = siblings;
    while (node._left) {
      node = node._left;
    }

    return node;
  }
  }

  up() {
    return this._parent;
  }
  }

  setValue(value) {
    this._value = value;
    return this;
  }
  }

  insertBefore(value) {
    const newNode = new Zipper(value, this._left, this, this._parent);
    if (this._left) {
      this._left._parent = newNode;
    }
    this._left = newNode;
    return newNode;
  }
  }

  insertAfter(value) {
    const newNode = new Zipper(value, this, this._right, this._parent);
    if (this._right) {
      this._right._parent = newNode;
    }
    this._right = newNode;
    return newNode;
  }
  }
}
  delete() {
    if (!this._parent) {
      return null;
    }

    const parent = this._parent;
    if (parent._left === this) {
      parent._left = null;
    } else {
      parent._right = null;
    }

    return parent;
  }