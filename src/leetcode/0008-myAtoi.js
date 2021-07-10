/**
 * @param {string} s
 * @return {number}
 */
const MAX_INT = Math.pow(2, 31);
var myAtoi = function(s) {
  const num = parseInt(s.trim().match(/^[\+\-]?\d+/));
  if (num <= -MAX_INT) return -MAX_INT;
  else if (num >= MAX_INT - 1) return MAX_INT - 1;
  return isNaN(num) ? 0 : num;
};

const myAtoiTests = [
  ["-   234", 0],
  ["2147483647", 2147483647],
  ["2147483648 asdf asd 324", 2147483647],
  ["-2147483647", -2147483647],
  ["-2147483648", -2147483648],
  ["-9147483648", -2147483648],
  ["-9147483648", -2147483648],
  ["asdfasd -9147483648", 0],
  ["-9147483648 asdf asd 324", -2147483648],
];