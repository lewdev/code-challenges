function numberOfWays(arr, k) {
  let pairs = 0;
  arr.forEach((n, i) => {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) pairs++;
    }
  });
  return pairs;
}

var k_1 = 6;
var arr_1 = [1, 2, 3, 4, 3];
var expected_1 = 2;
var output_1 = numberOfWays(arr_1, k_1);
check(expected_1, output_1);

var k_2 = 6;
var arr_2 = [1, 5, 3, 3, 3];
var expected_2 = 4;
var output_2 = numberOfWays(arr_2, k_2);
check(expected_2, output_2);

// Add your own test cases here

const numberOfWaysTests = [
  [[arr_1, k_1], expected_1],
  [[arr_2, k_2], expected_2],
];