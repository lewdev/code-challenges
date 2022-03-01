const getTotalTime = arr => {
  let penalty = 0, sum;
  arr.sort();
  arr.reverse();
  while (arr.length > 1) {
    sum = arr[0] + arr[1];
    arr.splice(0, 1, sum);
    arr.splice(1, 1);
    penalty += sum;
  }
  return penalty;
};

/*---------------------------
Notes:

This is supposed to be a "greedy algorithm" but I just noticed that starting with the larger numbers yields the highest 
penalties. So I just sorted and reversed.

It kind of lost the fun in coming up with a solution.
---------------------------*/

var arr_1 = [4, 2, 1, 3];
var expected_1 = 26;
var output_1 = getTotalTime(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 3, 9, 8, 4];
var expected_2 = 88;
var output_2 = getTotalTime(arr_2);
check(expected_2, output_2);

const getTotalTimeTests = [
  [arr_1, expected_1],
  [arr_2, expected_2],
];