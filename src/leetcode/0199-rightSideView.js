/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
  if (!root) return [];
  const depthMap = {};
  findRightNodes(root, 0, depthMap);
  const visible = [];
  Object.keys(depthMap).map(k => {
    const len = depthMap[k].length;
    if (len > 0) visible.push(depthMap[k][len - 1]);
  });
  return visible;
};

const findRightNodes = (node, depth, depthMap) => {
  if (!node) return;
  if (!depthMap[depth]) depthMap[depth] = [];
  depthMap[depth].push(node.val);
  findRightNodes(node.left, depth + 1, depthMap);
  findRightNodes(node.right, depth + 1, depthMap);
};

//no tests since I'd have to build the tree code.
const rightSideViewTests = [];