const runningMedian = a => {
  let answers = [], max = [], min = [];
  const asc = function(a, b) {return a - b};
  const desc = function(a, b) {return b - a};
  a.forEach((n, i) => {
    if (max.length === 0) max.push(n);
    else if (n > min[0] && n < max[0]) {max.unshift(n); max.sort(asc);}
    else if (n < max[0] && n > min[0]) {min.unshift(n); min.sort(desc);}
    else if (n < min[0]) {min.push(n); min.sort(desc);}
    else if (n > max[0]) {max.push(n); max.sort(asc);}
    else { min.unshift(n); min.sort(desc);}
    if (Math.abs(max.length - min.length) > 1) {
      if (max.length <= min.length) {
        max.unshift(min.pop());
      }
      else if (max.length > min.length) {
        min.unshift(max.shift());
      }
    }
    let answer = i % 2 === 0 ? max[0] : (max[0] + min[0]) / 2.0;
    // console.log(max, min, answer);
    answers.push(answer);
  });
  return answers.map(a => a.toPrecision(2));
};

//highest value at the top
const addToHeap = (val, node, isHighest) => {
  if (!node.val) {
    node.val = val;
    return;
  }
  if ((isHighest && node.val < val)
    || (!isHighest && node.val > val)) {
    let newVal = val;
    val = node.val;
    node.val = newVal;
  }
  if (!node.left) node.left = {val};
  else if (!node.right) node.right = {val};
  else if (node.left && ((isHighest && node.left.val < val)
    || (!isHighest && node.left.val > val))) addToMinHeap(val, node.left, isHighest);
  else if (node.right) addToMinHeap(val, node.right, isHighest);
}

const runningMedianTests = [
  [[7, 3, 5, 2], [7, 5, 5, 4].map(a => a.toPrecision(2))],
  [[12, 4, 5, 3, 8, 7], [12, 8, 5, 4.5, 5, 6].map(a => a.toPrecision(2))],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5].map(a => a.toPrecision(2))],
];