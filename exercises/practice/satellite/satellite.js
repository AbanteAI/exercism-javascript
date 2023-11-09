//
// This is only a SKELETON file for the 'Satellite' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length === 0 || inorder.length === 0) {
    return {};
  }

  const buildTree = (preorder, inorder, start, end) => {
    if (start > end) {
      return null;
    }

    const value = preorder.shift();
    const index = inorder.indexOf(value);

    const node = {
      value,
      left: buildTree(preorder, inorder, start, index - 1),
      right: buildTree(preorder, inorder, index + 1, end),
    };

    return node;
  };

  return buildTree(preorder, inorder, 0, inorder.length - 1);
};
