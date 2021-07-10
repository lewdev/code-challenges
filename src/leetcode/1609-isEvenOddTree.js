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
 * @return {boolean}
 */
var isEvenOddTree = function(nums) {
  const size = nums.length;
  let level = 1, i, num = nums[0];
  if (num % 2 === 0) return false;
  while (true) {
    const nodesOnLevel = level === 0 ? 1 : Math.pow(2, level);
    const isLevelEven = level === 0 ? false : level % 2 === 0;
    const startNode = level === 0 ? 0 : 2 ^ (level - 1) + 1;
    console.log("startNode=", startNode, "nodesOnLevel=", nodesOnLevel);
    if (startNode >= size) return true;
    //if even, check for odds
    for (i = startNode; i < startNode + nodesOnLevel; i++) {
      num = nums[i];
      if (num) {
        let isEven = num % 2 === 0;
        if (isLevelEven) {
          if (isEven) {//isOdd
            console.log('expected even', `level=${level}`, `num=${num}`, `i=${i}`, "Failed");
            return false;
          }
        }
        else if (!isEven) {
          console.log('expected odd', `level=${level}`, `num=${num}`, `i=${i}`, "Failed");
          return false;
        }
      }
    }
    level++;
  }
  return true;
};
const isEvenOddTreeTests = [
  [[1,10,4,3,null,7,9,12,8,6,null,null,2], true],
  [[5,4,2,3,3,7], false],
  [[5,9,1,3,5,7], false],
  [[1], true],
  [[11,8,6,1,3,9,11,30,20,18,16,12,10,4,2,17], true],
];