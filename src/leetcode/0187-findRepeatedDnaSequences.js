/**
 * @param {string} s
 * @return {string[]}
 * Constraints:
 * - 0 <= s.length <= 105
 * - s[i] is 'A', 'C', 'G', or 'T'.
 */
var findRepeatedDnaSequences = function(s) {
  const size = s.length, hashSet = {}, outputs = {};
  let str;
  for (i = 0; i < size - 9; i++) {
    str = s.substr(i, 10);
    if (!hashSet[str]) hashSet[str] = 1;
    else outputs[str] = 1;
  }
  return Object.keys(outputs);
};

// AAAAACCCCC,AAAACCCCCA,AAACCCCCAA,AACCCCCAAA,ACCCCCAAAA,CCCCCAAAAA
const findRepeatedDnaSequencesTests = [
  ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", ["AAAAACCCCC","CCCCCAAAAA"]],
  ["AAAAAAAAAAAAA", ["AAAAAAAAAA"]],
  // ["ABCDEFGHIJABCDEFGHIJ", ["ABCDEFGHIJ"]],
];