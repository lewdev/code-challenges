const findMinArray = (arr, k) => {

};

var n_1 = 3, k_1 = 2;
var arr_1 = [5, 3, 1];
var expected_1 = [1, 5, 3];
var output_1 = findMinArray(arr_1, k_1);
check(expected_1, output_1);

var n_2 = 5, k_2 = 3;
var arr_2 = [8, 9 ,11, 2, 1];
var expected_2 = [2, 8, 9, 11, 1];
var output_2 = findMinArray(arr_2, k_2);
check(expected_2, output_2);

const findMinArrayTests = [
  [[arr_1, k_1], expected_1],
  [[arr_2, k_2], expected_2],
];