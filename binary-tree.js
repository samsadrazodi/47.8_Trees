/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    // If the tree is empty, the depth is 0.
    if (node === null) {
      return 0;
    }

    // If the current node is a leaf, the depth is 1.
    if (node.left === null && node.right === null) {
      return 1;
    }

    // Calculate the depths of the left and right subtrees.
    const leftDepth = this.minDepth(node.left);
    const rightDepth = this.minDepth(node.right);

    // If one subtree is empty, return the depth of the other subtree + 1.
    if (node.left === null) {
      return rightDepth + 1;
    }
    if (node.right === null) {
      return leftDepth + 1;
    }

    // Return the minimum depth between the left and right subtrees + 1.
    return Math.min(leftDepth, rightDepth) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    
      // If the tree is empty, the depth is 0.
      if (node === null) {
        return 0;
      }
  
      // Calculate the depths of the left and right subtrees.
      const leftDepth = this.maxDepth(node.left);
      const rightDepth = this.maxDepth(node.right);
  
      // Return the maximum depth between the left and right subtrees + 1.
      return Math.max(leftDepth, rightDepth) + 1;
    
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // Initialize a variable to keep track of the maximum sum.
    let maxSum = Number.NEGATIVE_INFINITY;

    // Helper function to recursively calculate the maximum sum.
    function calculateMaxSum(node) {
      if (node === null) {
        return 0; // Return 0 for null nodes.
      }

      // Calculate the maximum sum for the left and right subtrees.
      const leftMax = Math.max(0, calculateMaxSum(node.left)); // Ignore negative sums.
      const rightMax = Math.max(0, calculateMaxSum(node.right)); // Ignore negative sums.

      // Calculate the maximum sum including the current node.
      const currentMax = node.val + leftMax + rightMax;

      // Update the maximum sum if the current path has a higher sum.
      maxSum = Math.max(maxSum, currentMax);

      // Return the maximum sum of the current subtree rooted at the current node.
      return node.val + Math.max(leftMax, rightMax);
    }

    // Start the calculation from the root node.
    calculateMaxSum(this.root);

    // Return the overall maximum sum.
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    // Initialize variables to track the current node and the smallest larger value found.
    let currentNode = this.root;
    let result = null;

    while (currentNode) {
      if (currentNode.val > lowerBound) {
        // If the current node's value is larger than the lowerBound, update the result
        // and continue searching in the left subtree for a potentially smaller value.
        result = currentNode.val;
        currentNode = currentNode.left;
      } else {
        // If the current node's value is not larger than the lowerBound, search in the
        // right subtree for a potentially larger value.
        currentNode = currentNode.right;
      }
    }

    // Return the smallest larger value found or null if none exists.
    return result;
  }
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }


module.exports = { BinaryTree, BinaryTreeNode };
