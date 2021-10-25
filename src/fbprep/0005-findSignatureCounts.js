// Add any extra import statements you may need here


// Add any helper functions you may need here


function findSignatureCounts(arr) {
  // Write your code here
  return arr.map((a, i) => i - 1 < 0 ? arr[i] : arr[ i - 1]);
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
const printintegerArray = arr => `[${arr.join(", ")}]`;

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) result = false;
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    console.log(rightTick + ' Test #' + test_case_number);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
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