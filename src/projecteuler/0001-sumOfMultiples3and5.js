//const MAX_NUMBER = 1000;
//const MULTIPLES = [3, 5];

function sumOfMultiples3and5(multiples, maxNum) {
  let num = 1;
  let sum = 0;
  while (num < maxNum) {
    let isMultiple = false;
    for (let i = 0; i < multiples.length; i++) {
      const multiple = multiples[i];
      if (num % multiple === 0) {
        isMultiple = true;
      }
    }
    if (isMultiple) {
      sum += num;
    }
    num++;
  }
  return sum;
}
const sumOfMultiples3and5Tests = [
  [[[3,5], 1000], 233168],
];
