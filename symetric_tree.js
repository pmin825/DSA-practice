const isSymmetric = (root) => {
  if (!root) return null;
  return isSymmetricHelper(root.left, root.right);
};

const isSymmetricHelper = (sideOne, sideTwo) => {
  if (!sideOne || !sideTwo) return sideOne === sideTwo;

  if (sideOne.val === sideTwo.val) {
    return (
      isSymmetricHelper(sideOne.left, sideTwo.right) &&
      isSymmetricHelper(sideOne.right, sideTwo.left)
    );
  }
  return false;
};
