/**
 * @param {string} s
 * @return {string[]}
 * Constraints:
 * - 0 <= s.length <= 105
 * - s[i] is 'A', 'C', 'G', or 'T'.
 */
var findRepeatedDnaSequences = function(s) {
  const size = s.length, output = [];
  let i, j, char1, char2, matchCount, seqCount, index;
  for (i = 0; i < size; i++) {
    matchCount = 0;
    seqCount = 0;
    index = i;
    for (j = i + 1; j < size; j++) {
      char1 = s.charAt(index);
      char2 = s.charAt(j);
      console.log(char1, char2, char1 === char2, matchCount);
      if (char1 === char2) {
        if (++matchCount === 10) {
          const str = s.substr(i, 10);
          if (!output.includes(str)) output.push(str);
        }
        index++;
      }
    }
  }
  return output;
};
// AAAAACCCCC,AAAACCCCCA,AAACCCCCAA,AACCCCCAAA,ACCCCCAAAA,CCCCCAAAAA
const findRepeatedDnaSequencesTests = [
  ["AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT", ["AAAAACCCCC","CCCCCAAAAA"]],
  ["AAAAAAAAAAAAA", ["AAAAAAAAAA"]],
  // ["ABCDEFGHIJABCDEFGHIJ", ["ABCDEFGHIJ"]],
];