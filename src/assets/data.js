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

  //--------- fbprep ----------
  { num: 1, name: "Rotational Cipher", method: "rotationalCipher", params: 2, site: "fbprep",
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=238827593802550&ppid=454615229006519&practice_plan=1" },

  //--------- code.golf ----------
  { num: 1, name: "12 Days of Christmas", method: "print12DaysOfChristmas", site: "code.golf",
    url: "https://code.golf/12-days-of-christmas#javascript" },
  { num: 2, name: "Fizz Buzz", method: "fizzBuzz", site: "code.golf",
    url: "https://code.golf/fizz-buzz#javascript" },
  { num: 3, name: "Emojify", method: "emojify", site: "code.golf",
    url: "https://code.golf/emojify" },
  { num: 4, name: "99 Bottles of Beer", method: "nintyNineBottles", site: "code.golf",
    url: "https://code.golf/99-bottles-of-beer#javascript" },
  { num: 5, name: "Abundant Numbers", method: "abundantNumbers", site: "code.golf",
    url: "https://code.golf/abundant-numbers#javascript" },
  { num: 6, name: "Arabic To Roman", method: "arabicToRoman", site: "code.golf",
    url: "https://code.golf/arabic-to-roman#javascript" },
  { num: 7, name: "CSS Colors", method: "cssColors", site: "code.golf",
    url: "https://code.golf/css-colors#javascript" },
  { num: 8, name: "Cubes", method: "cubes", site: "code.golf",
    url: "https://code.golf/cubes#javascript" },
  { num: 9, name: "Christmas Trees", method: "christmasTrees", site: "code.golf",
    url: "https://code.golf/christmas-trees#javascript" },
  { num: 10, name: "Diamonds", method: "diamonds", site: "code.golf",
    url: "https://code.golf/diamonds#javascript" },
  { num: 12, name: "Vampire Numbers", method: "vampireNumbers", site: "code.golf",
    url: "https://code.golf/vampire-numbers#javascript" },
  { num: 13, name: "Rock Paper Scissors Spock Lizard", method: "rpssl", site: "code.golf",
    url: "https://code.golf/rock-paper-scissors-spock-lizard#javascript" },
  { num: 14, name: "Look and Say", method: "lookAndSay", site: "code.golf",
    url: "https://code.golf/look-and-say#javascript" },

  //--------- Project Euler ----------
  { num: 1, name: "Multiples of 3 and 5", method: "sumOfMultiples3and5", params: 2, site: "projecteuler",
    url: "https://projecteuler.net/problem=1" },
  
];