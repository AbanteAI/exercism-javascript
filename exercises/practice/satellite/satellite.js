//
// This is only a SKELETON file for the 'Satellite' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length === 0) {
    return {};
  }

  const rootValue = preorder[0];
  const rootIndex = inorder.indexOf(rootValue);

  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);

  const leftPreorder = preorder.filter((value) => leftInorder.includes(value));
  const rightPreorder = preorder.filter((value) => rightInorder.includes(value));

  const left = treeFromTraversals(leftPreorder, leftInorder);
  const right = treeFromTraversals(rightPreorder, rightInorder);

  return {
    value: rootValue,
    left,
    right,
  };
};
