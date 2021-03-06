// Add any helper functions you may need here
const arraysEqual = (arrA, arrB) => {
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return false;
  }
  return true;
};

function areTheyEqual(array_a, array_b){
  const len = array_a.length;
  let i, j, reversedArr, reversedSubArr;
  for (i = 0; i < len - 1; i++) {
    for (j = 1; j < len; j++) {
      reversedSubArr = [...array_b].splice(i, j).reverse();
      reversedArr = [...array_b];
      reversedArr.splice(i, j, ...reversedSubArr);
      if (arraysEqual(array_a, reversedArr)) return true;
    }
  }
  return false;
}

var array_a_1 = [1, 2, 3, 4];
var array_b_1 = [1, 4, 3, 2];
var expected_1 = true;
var output_1 = areTheyEqual(array_a_1, array_b_1); 
check(expected_1, output_1); 

var array_a_2 = [1, 2, 3, 4];
var array_b_2 = [1, 4, 3, 3];
var expected_2 = false;
var output_2 = areTheyEqual(array_a_2, array_b_2); 
check(expected_2, output_2); 

// Add your own test cases here
const areTheyEqualTests = [
  [[array_a_1, array_b_1], expected_1],
  [[array_a_2, array_b_2], expected_2],
];