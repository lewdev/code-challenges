// Definition for a binary tree node
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function visibleNodes(root) {
  // Write your code here
  let count = 1;
  let node = root;
  let parent = null;
  let limit = 30;
  while (node && limit--) {
    parent = node;
    console.log(node.val);
    if (node.left || node.right) {
      if (node.left) node = node.left;
      else if (node.right) node = node.right;
      count++;
      if (!node.left && !node.right) {
        node = parent.right;
      }
    }
    else node = null;
  }
  return count;
}


var root1 = new TreeNode(8);
root1.left = new TreeNode(3);
root1.right = new TreeNode(10);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(6);
root1.left.right.left = new TreeNode(4);
root1.left.right.right = new TreeNode(7);
root1.right.right = new TreeNode(14);
root1.right.right.left = new TreeNode(13);
var expected_1 = 4;
var output_1 = visibleNodes(root1);
check(expected_1, output_1);

var root2 = new TreeNode(10);
root2.left = new TreeNode(8);
root2.right = new TreeNode(15);
root2.left.left = new TreeNode(4);
root2.left.left.right = new TreeNode(5);
root2.left.left.right.right = new TreeNode(6);
root2.right.left = new TreeNode(14);
root2.right.right = new TreeNode(16);
var expected_2 = 5;
var output_2 = visibleNodes(root2);
check(expected_2, output_2);

// Add your own test cases here
const visibleNodesTests = [
  [root1, expected_1],
  [root2, expected_2],
];