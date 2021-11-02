// Add any extra import statements you may need here


// Add any helper functions you may need here


function findSignatureCounts(arr) {
  // Write your code here
  return arr.map((a, i) => i - 1 < 0 ? arr[i] : arr[ i - 1]);
}

var arr_1 = [2, 1];
var expected_1 = [2, 2];
var output_1 = findSignatureCounts(arr_1);
check(expected_1, output_1);

var arr_2 = [1, 2];
var expected_2 = [1, 1];
var output_2 = findSignatureCounts(arr_2);
check(expected_2, output_2);

// Add your own test cases here
// Add your own test cases here
const findSignatureCountsTests = [
  [arr_1, expected_1],
  [arr_2, expected_2],
];