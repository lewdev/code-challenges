var MAX_STR_LENGTH = 97;
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  if (s.length === 1) return 1;
  const size = s.length < MAX_STR_LENGTH ? s.length : MAX_STR_LENGTH;
  let charLen = size;
  for (; charLen > 0; --charLen) {
    const noDupSubstr = findNoDupSubstr(s, charLen);
    if (noDupSubstr) return noDupSubstr.length;
  }
  return 1;
};
const findNoDupSubstr = (s, len) => {
  let i = 0, str;
  for (; i < s.length - len + 1; i++) {
    str = s.substr(i, len);
    if (!hasDuplicateChars(str)) {
      return str;
    }
  }
  return false;
};
const hasDuplicateChars = str => {
  let i = 0, j, size = str.length;
  if (size === 1) return true;
  for (; i < size; i++) {
    for (j = 0; j < size; j++) {
      if (i !== j && str.charAt(i) === str.charAt(j)) {
        return true;
      }
    }
  }
  return false;
};
const lengthOfLongestSubstringTests = [
  ["anviaj", 5],
  ["au", 2],
  ["dvdf", 3],
  ["abcabcbb", 3],
  ["bbbbb", 1],
  ["pwwkew", 3],
  ["asdfasdf", 4],
  ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  , 95],
];
