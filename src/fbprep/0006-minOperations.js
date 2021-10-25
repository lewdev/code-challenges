// Add any helper functions you may need here
const isSorted = arr => {
  if (!arr || arr.length === 0) return false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return false;
  }
  return true;
}

function minOperations(arr) {
  // Write your code here
  const stepMap = subReverseArr(arr, {}, 0);
  console.log(`stepMap`, stepMap);
  const steps = Object.keys(stepMap).map(s => parseInt(s));
  steps.sort();
  console.log(`steps`, steps);
  return steps.length > 0 ? steps[0] : "FAILED";
}

const subReverseArr = (arr, stepMap, step) => {
  console.log("subReverseArr", arr, stepMap, step);
  console.log(arr);
  if (step > 3) {
    console.log("stepMap exceeded", step);
    return null;
  }//prevent inifinite loops
  const size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = 2; j < size; j++) {
      // console.log(i, j);
      //remove existing array items and add reversed array
      const subReversed = [...arr].splice(i, j).reverse()
      let tempArr = [...arr];
      tempArr.splice(i, j, ...subReversed);
      if (isSorted(tempArr)) {
        stepMap[step + 1] = 1;
        i = j = size;
        console.log("SORTED step: ", step + 1,  stepMap);
        return;
      }
      if (subReverseArr(tempArr, stepMap, step + 1)) return;
      // subReverseArr(arr, stepMap, step + 1);
    }
  }
  return stepMap;
}


// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;
var rightTick = "\u2713";
var wrongTick = "\u2717";

function check(expected, output) {
  console.log("check", expected, output)
  if (expected == output) {
    console.log(`${rightTick} Test # ${test_case_number}`);
  }
  else {
    console.log(
      `${wrongTick} Test #${test_case_number}: Expected ${printInteger(expected)} Your output: ${printInteger(output)}`
    );
  }
  test_case_number++;
}

var n_1 = 5;
var arr_1 = [1, 2, 5, 4, 3];
var expected_1 = 1;
// var output_1 = minOperations(arr_1);
// check(expected_1, output_1);

var n_2 = 3;
var arr_2 = [3, 1, 2];
var expected_2 = 2;
// var output_2 = minOperations(arr_2);
// check(expected_2, output_2);

// Add your own test cases here
const minOperationsTests = [
  // [arr_1, expected_1],
  [arr_2, expected_2],
]