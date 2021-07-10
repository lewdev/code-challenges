/**
 * Displays and runs any or all of the tests.
 */
const data = [
  //{ num: 2, name: "", method: "addTwoNumbers", url: "" },
  { num: 3, name: "Length of Longest Substring", method: "lengthOfLongestSubstring", site: "leetcode",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters" },
  { num: 4, name: "Find Median Sorted Arrays", method: "findMedianSortedArrays", params: 2, site: "leetcode",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays" },
  { num: 5, name: "Longest Palindromic Substring", method: "longestPalindrome", site: "leetcode",
    url: "https://leetcode.com/problems/longest-palindromic-substring" },
  { num: 6, name: "ZigZag Conversion", method: "zigZagConvert", params: 2, site: "leetcode",
    url: "https://leetcode.com/problems/zigzag-conversion" },
  { num: 8, name: "String to Integer (atoi)", method: "myAtoi", site: "leetcode",
    url: "https://leetcode.com/problems/string-to-integer-atoi/submissions/" },
  { num: 993, name: "Number of Recent Calls", method: "numberOfRecentCalls", site: "leetcode",
    url: "https://leetcode.com/problems/number-of-recent-calls/" },
  { num: 1288, name: "Remove Covered Intervals", method: "removeCoveredIntervals", site: "leetcode",
    url: "https://leetcode.com/problems/remove-covered-intervals/" },
  { num: 187, name: "Repeated DNA Sequences", method: "findRepeatedDnaSequences", site: "leetcode",
    url: "https://leetcode.com/problems/repeated-dna-sequences" },
  { num: 1608, name: "Special Array With X Elements Greater Than or Equal X", method: "specialArray", site: "leetcode",
    url: "https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x" },
  { num: 1609, name: "Even Odd Tree", method: "isEvenOddTree", site: "leetcode",
    url: "https://leetcode.com/problems/even-odd-tree/", incomplete: true },

  //--------- Project Euler ----------
  { num: 1, name: "Multiples of 3 and 5", method: "sumOfMultiples3and5", params: 2, site: "projecteuler",
    url: "https://projecteuler.net/problem=1" },

  //--------- code.golf ----------
  { num: 1, name: "12 Days of Christmas", method: "print12DaysOfChristmas", site: "code.golf",
    url: "https://code.golf/12-days-of-christmas#javascript" },
  { num: 2, name: "Fizz Buzz", method: "fizzBuzz", site: "code.golf",
    url: "https://code.golf/fizz-buzz#javascript" },
  { num: 3, name: "Emojify", method: "emojify", site: "code.golf",
    url: "https://code.golf/emojify#javascript" },
];