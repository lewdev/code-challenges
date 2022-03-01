/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
  if (threshold === 0) return arr.length - k + 1;
  let count = 0;
  let subArrTotal = 0;
  for (let i = 0; i < arr.length; i++) { //i = 3
    subArrTotal += arr[i];
    if (i >= k - 1) {//when i = 3 (for k = 3)
      let average = subArrTotal / k; //check average
      if (average >= threshold) count++;
      subArrTotal -= arr[i - (k - 1)]; //i = 3; and we want to refer to index 0; (3 - (3 - 1))
    }
  }
  return count;
};

const numOfSubarraysTests = [
  [[[2,2,2,2,5,5,5,8], 3, 4], 3],
  [[[1,1,1,1,1], 1, 0], 5],
  [[[11,13,17,23,29,31,7,5,2,3], 3, 5], 6],
  [[[7,7,7,7,7,7,7], 7, 7], 1],
  [[[4,4,4,4], 4, 1], 1],
];