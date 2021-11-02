const runningMedian = a => {
  let answers = [], max = [], min = [];
  a.forEach(n => {
    let answer;
    if (max.length === 0) {
      max.push(n);
    }
    else if (max.length === min.length) {
      if (n > min[0]) max.push(n);
      else {
        min.unshift(n);
        max.push(min.pop());
      }
    }
    //get median
    if (max.length === min.length) answer = (max[0] + min[0]) / 2.0;
    else answer = max[0];
    answers.push(answer.toPrecision(2));
  });
  return answers;
};

const runningMedianTests = [
  // [[7, 3, 5, 2], [7, 5, 5, 4].map(a => a.toPrecision(2))],
  [[12, 4, 5, 3, 8, 7], [12, 8, 5, 4.5, 5, 6].map(a => a.toPrecision(2))],
  // [[10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5].map(a => a.toPrecision(2))],
];