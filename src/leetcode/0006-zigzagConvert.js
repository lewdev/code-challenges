/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 *  Constraints:
 *  - 1 <= s.length <= 1000
 *  - s consists of English letters (lower-case and upper-case), ',' and '.'.
 *  - 1 <= numRows <= 1000
 */
var zigZagConvert = function(s, numRows) {
  const size = s.length;
  if (size === 1 || numRows === 1 || size <= numRows) return s;
  const grid = [[]];
  let i = 0, col, step = 0, row, mod;
  while (i < size) {
    col = Math.floor(step / numRows);
    row = step % numRows;
    if (!grid[row]) grid[row] = [];
    mod = col % (numRows - 1);
    if (mod === 0 || row === numRows - mod - 1) {
      grid[row][col] = s.charAt(i++);
    }
    else {
      grid[row][col] = "";
    }
    step++;
  }
  const arr = [];
  for (i = 0; i < numRows; i++) {
    //console.log(`row=${i}; ${grid[i].join("")}`);
    if (grid[i]) arr.push(grid[i].join(""));
  }
  // console.log(arr.join(""))
  return arr.join("");
};

const zigZagConvertTests = [
  [["PAYPALISHIRING", 3], "PAHNAPLSIIGYIR"],
  [["PAYPALISHIRING", 4], "PINALSIGYAHRPI"],
  [["A", 1], "A"],
  [["AB", 1], "AB"],
  [["AB", 3], "AB"],
];