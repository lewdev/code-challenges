/**
 * @param {string} s
 * @return {string[]}
 * Constraints:
 * - 0 <= s.length <= 105
 * - s[i] is 'A', 'C', 'G', or 'T'.
 */
var findRepeatedDnaSequences = function(s) {
  const size = s.length, hashSet = {}, output = [];
  let str;
  for (let i = 0; i < size - 9; i++) {
    str = s.substr(i, 10);
    if (!hashSet[str]) hashSet[str] = i;
    else hashSet[str]++;
  }
  Object.keys(hashSet).map(a => {
    if (hashSet[a] >= 2) output.push(a);
  });
  return output;
};

// AAAAACCCCC,AAAACCCCCA,AAACCCCCAA,AACCCCCAAA,ACCCCCAAAA,CCCCCAAAAA
const findRepeatedDnaSequencesTests = [
  ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", ["AAAAACCCCC","CCCCCAAAAA"]],
  ["AAAAAAAAAAAAA", ["AAAAAAAAAA"]],
  // ["ABCDEFGHIJABCDEFGHIJ", ["ABCDEFGHIJ"]],
];