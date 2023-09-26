//
// This is only a SKELETON file for the 'Satellite' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length === 0 && inorder.length === 0) {
    return {};
  } else if (preorder.length !== inorder.length) {
    return null;
  }

  const buildTree = (preStart, inStart, inEnd) => {
    if (preStart >= preorder.length || inStart > inEnd) {
      return null;
    }

    const nodeValue = preorder[preStart];
    const node = { value: nodeValue, left: null, right: null };
    const inIndex = inorder.indexOf(nodeValue);

    node.left = buildTree(preStart + 1, inStart, inIndex - 1);
    node.right = buildTree(preStart + inIndex - inStart + 1, inIndex + 1, inEnd);

    return node;
  };

  return buildTree(0, 0, inorder.length - 1);
};
