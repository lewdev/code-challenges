var containsNearbyDuplicate = function(nums, k) {
  const map = {};
  let n;
  for (let i = 0; i < nums.length; i++) {
    n = nums[i];
    if (typeof map[n] !== 'undefined' && Math.abs(i - map[n]) <= k) {
      return true;
    }
    else {
      map[n] = i;
    }
  }
  return false;
};

const containsNearbyDuplicateTests = [
  [[[1,2,3,1], 3], true],
  [[[1,0,1,1], 1], true],
  [[[1,2,3,1,2,3], 2], false],
];