/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const isEvenOddTree = nums => {
  return isEvenOddTreeCode(buildTreeBfs(nums));
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isEvenOddTreeCode = root => traverse(root, 0, {});

const traverse = (node, depth, depthMap) => {
  if (!node) return true;
  if (depthMap[depth] && 
    ((depth % 2 === 1 && depthMap[depth] <= node.val)
    || (depth % 2 === 0 && depthMap[depth] >= node.val))) {
    return false;
  }
  if (node.val && node.val % 2 + depth % 2 !== 1) return false;
  depthMap[depth] = node.val;
  return traverse(node.left, depth + 1, depthMap) && traverse(node.right, depth + 1, depthMap);
 };

//breadth-first-search (BFS) tree building
const buildTreeBfs = nums => {
  nums = [...nums];
  const root = {val: nums.shift()};
  let node = root, toBeVisited = [root], val;
  while (nums.length > 0 && toBeVisited.length > 0) {
    node = toBeVisited.shift();
    if (val = nums.shift()) {
      node.left = {val};
      toBeVisited.push(node.left);
    };
    if (val = nums.shift()) {
      node.right = {val};
      toBeVisited.push(node.right);
    };
  }
  return root;
};
// var isEvenOddTree = function(nums) {
//   let depth = 0, i, val;
//   while (nums.length > 0) {
//     for (i = 0; i < Math.pow(2, depth) && nums.length > 0; i++) {
//       val = nums.shift();
//       if (val && (depth % 2 + val % 2 !== 1)) {
//         return false;
//       }
//     }
//     depth++;
//   }
//   return true;
// };
const isEvenOddTreeTests = [
  [[1,10,4,3,null,7,9,12,8,6,null,null,2], true],
  [[5,4,2,3,3,7], false],
  [[5,9,1,3,5,7], false],
  [[1], true],
  [[11,8,6,1,3,9,11,30,20,18,16,12,10,4,2,17], true],
];