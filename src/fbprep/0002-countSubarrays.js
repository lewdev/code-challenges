function countSubarrays(arr) {
  let n, m, i, j, subArr = [], output = [];
  for (i = 0; i < arr.length; i++) {
    n = arr[i];

    //forwards
    subArr = [n];
    totals = 0;
    for (j = i + 1; j < arr.length; j++) {
      m = arr[j];
      if (n > m) subArr.push(m);
      else j = arr.length;
    }
    totals += subArr.length;

    //backwards
    subArr = [];
    for (j = i - 1; j >= 0; j--) {
      m = arr[j];
      if (n > m) subArr.push(m);
      else j = -1;
    }
    totals += subArr.length;
    output.push(totals);
  }
  return output;
}

var test_1 = [3, 4, 1, 6, 2];
var expected_1 = [1, 3, 1, 5, 1];
var output_1 = countSubarrays(test_1);
check(expected_1, output_1);

var test_2 = [2, 4, 7, 1, 5, 3];
var expected_2 = [1, 2, 6, 1, 3, 1];
var output_2 = countSubarrays(test_2);
check(expected_2, output_2);

// Add your own test cases here
const countSubarraysTests = [
  [test_1, expected_1],
  [test_2, expected_2],
];