//
// This is only a SKELETON file for the 'Satellite' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length === 0 || inorder.length === 0) {
    return {};
  }

  const rootValue = preorder[0];
  const rootIndex = inorder.indexOf(rootValue);

  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  const leftPreorder = preorder.slice(1, leftInorder.length + 1);
  const rightPreorder = preorder.slice(leftInorder.length + 1);

  return {
    value: rootValue,
    left: treeFromTraversals(leftPreorder, leftInorder),
    right: treeFromTraversals(rightPreorder, rightInorder),
  };
};
