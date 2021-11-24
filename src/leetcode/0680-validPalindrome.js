/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  return isPalindrome(0, s.length - 1, s, false);
};

const isPalindrome = (left, right, s, oneDelete) => {
  while (left < right) {
    if (s.charAt(left) === s.charAt(right)) {
      left++;
      right--;
    }
    else if (!oneDelete) {
      return isPalindrome(left + 1, right, s, true) || isPalindrome(left, right - 1, s, true);
    }
    else return false;
  }
  return true;
};

const validPalindromeTests = [
  ["abca", true],
  ["acbbbbbbca", true],
  ["tacocat", true],
  ["tacocatz", true],
  ["ztacocat", true],
  ["adceceadbddbdaececrda" , true],
  ["aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga", true],
  ["ebcbbececabbacecbbcbe", true],
];
