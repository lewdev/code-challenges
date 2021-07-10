/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const arr = nums1.concat(nums2);
  arr.sort((a, b) => a === b ? 0 : a < b ? -1 : 1);
  //console.log(arr);
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  }
  return arr[mid];
};

const findMedianSortedArraysTests = [
  [[[1,3], [2,4]], 2.5],
  [[[1,3], [2]], 2],
  [[[3,4], [1,2,5]], 3],
  [[[0,0], [0,0,0]], 0],
  [[[], [2]], 2],
  [[[3], [-2,-1]], -1],
];
