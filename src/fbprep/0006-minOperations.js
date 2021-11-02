// Add any helper functions you may need here
const isSorted = arr => {
  if (!arr || arr.length === 0) return false;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return false;
  }
  return true;
}

function minOperations(arr) {
  const stepMap = subReverseArr(arr, {}, 0);
  const steps = Object.keys(stepMap).map(s => parseInt(s));
  steps.sort();
  return steps.length > 0 ? steps[0] : 0;
}

const subReverseArr = (arr, stepMap, step) => {
  //prevent going too deep into permutations
  if (step > Math.floor(arr.length / 2)) return;//prevent inifinite loops
  const size = arr.length;
  let found = false;
  for (let i = 0; i < size; i++) {
    for (let j = 2; j <= size; j++) {
      //remove existing array items and add reversed array
      const subReversed = [...arr].splice(i, j).reverse()
      let tempArr = [...arr];
      tempArr.splice(i, j, ...subReversed);
      if (isSorted(tempArr)) {
        stepMap[step + 1] = 1;
        found = i = j = size;
      }
      if (!found) Object.assign(stepMap, subReverseArr(tempArr, stepMap, step + 1));
    }
  }
  return stepMap;
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
  [arr_1, expected_1],
  [arr_2, expected_2],
];