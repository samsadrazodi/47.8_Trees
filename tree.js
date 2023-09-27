/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }


  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0; // Empty tree, sum is 0
    }

    let sum = 0;
    const stack = [this.root];

    while (stack.length > 0) {
      const node = stack.pop();
      sum += node.val;

      // Push all children of the current node onto the stack
      for (const child of node.children) {
        stack.push(child);
      }
    }

    return sum;
  }

  

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
      return 0;
    }

    let count = 0;
    const stack = [this.root];

    while (stack.length > 0){
      const node = stack.pop();
      if(node.val % 2 ===0){
        count += 1;
      }
      for (const child of node.children){
        stack.push(child);
      }
    }
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(x) {
    if (!this.root) {
      return 0; // Empty tree, no nodes greater than x
    }

    let count = 0;
    const stack = [this.root];

    while (stack.length > 0) {
      const node = stack.pop();

      if (node.val > x) {
        count++;
      }

      // Push all children of the current node onto the stack
      for (const child of node.children) {
        stack.push(child);
      }
    }

    return count;
  }
  
}

module.exports = { Tree, TreeNode };


