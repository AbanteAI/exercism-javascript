//
// This is only a SKELETON file for the 'Satellite' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length === 0 || inorder.length === 0 || preorder.length !== inorder.length) {
    throw new Error('Traversal lists have different lengths');
  }

  const buildTree = (preorder, inorder) => {
    if (inorder.length === 0) {
      return {};
    }
    const rootNodeValue = preorder[0];
    const rootIndexInorder = inorder.indexOf(rootNodeValue);

    if (rootIndexInorder === -1) {
      throw new Error('Must contain unique items');
    }

    const leftInorder = inorder.slice(0, rootIndexInorder);
    const rightInorder = inorder.slice(rootIndexInorder + 1);
    const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    const rightPreorder = preorder.slice(leftInorder.length + 1);

    return {
      value: rootNodeValue,
      left: buildTree(leftPreorder, leftInorder),
      right: buildTree(rightPreorder, rightInorder),
    };
  };

  return buildTree(preorder, inorder);
};
