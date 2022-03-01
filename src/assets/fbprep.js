//-------------------------------------
// Code found in all fbprep tests
//-------------------------------------

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
const printintegerArray = arr => `[${arr.join(", ")}]`;

const printInteger = n => `[${n}]`;

const printString = str => `["${str}"]`;

const printVal = val => {
  if (Number.isInteger(0)) return printInteger(val);
  else if (Array.isArray(val) && val.length > 0) {
    if (Number.isInteger(val[0])) return printintegerArray(val);
    else if (typeof val[0] === 'string') return `["${val.join('", "')}"]`
  }
  else if (typeof val === 'string') return printString(val);
};

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
    console.log(
      `${wrongTick} Test #${test_case_number}: Expected ${printVal(expected)} Your output: ${printVal(output)}`
    );
  }
  test_case_number++;
}
