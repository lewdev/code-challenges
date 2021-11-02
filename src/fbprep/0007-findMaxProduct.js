const copyNode = node => node ? {data: node.data, next: copyNode(node.next)} : null;

function findMaxProduct(arr) {
  const output = [];
  let head = null, tail, node, n;
  for (let i = 0; i < arr.length; i++) {
    n = arr[i];
    if (!head) head = {data: n};
    else {
      node = head;
      while (node) {
        if (n > node.data && (!node.next || n < node.next.data)) {
          node.next = {data: n, next: copyNode(node.next)}
          if (i >= 3) head = head.next;
          node = false;
        }
        else node = node.next;
      }
    }
    if (i < 2) {
      output.push(-1);
    }
    else {
      let product = 1;
      node = head;
      while (node) {
        product = node.data * product;
        node = node.next;
      }
      output.push(product);
    }
  }
  return output;
}

var arr_1 = [1, 2, 3, 4, 5];
var expected_1 = [-1, -1, 6, 24, 60];
var output_1 = findMaxProduct(arr_1);
check(expected_1, output_1);

var arr_2 = [2, 4, 7, 1, 5, 3];
var expected_2 = [-1, -1, 56, 56, 140, 140];
var output_2 = findMaxProduct(arr_2);
check(expected_2, output_2);

// Add your own test cases here
const findMaxProductTests = [
  [arr_1, expected_1],
  [arr_2, expected_2],
];