
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  const maxLen = Math.max(num1.length, num2.length);
  const numReversed1 = num1.split("").reverse();
  const numReversed2 = num2.split("").reverse();
  let sum, answer = [], moreThanTen = 0;
  for (let i = 0; i < maxLen; i++) {
    sum = (numReversed1[i] ? parseInt(numReversed1[i]) : 0)
      + (numReversed2[i] ? parseInt(numReversed2[i]) : 0)
      + moreThanTen;
    if (i < maxLen - 1) {
      if (sum > 9) {
        sum -= 10
        moreThanTen = 1;
      }
      else moreThanTen = 0;
    }
    answer.push("" + sum);
  }
  return answer.reverse().join("");
};

const addStringsTests = [
  [["11", "123"], "134"],
  [["456", "77"], "533"],
  [["0", "0"], "0"],
  [["1", "9"], "10"],
  [["9333852702227987", "85731737104263"], "9419584439332250"],
];