/**
 * Displays and runs any or all of the tests.
 * 
 * Get current date-time string:
 * > new Date().toISOString()
 */
const data = [
  //--------- fbprep ----------
  { num: 1, name: "Rotational Cipher", method: "rotationalCipher", params: 2, site: "fbprep", categories: ["Starter Plan", "Strings"],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=238827593802550&ppid=454615229006519&practice_plan=1" },
  { num: 2, name: "Contiguous Subarrays", method: "countSubarrays", site: "fbprep", categories: ["Starter Plan", "Arrays"],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=226517205173943&ppid=454615229006519&practice_plan=1" },
  { num: 3, name: "Pair Sums", method: "numberOfWays", params: 2, site: "fbprep", categories: ["Starter Plan", "Hash Tables"],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=840934449713537&ppid=454615229006519&practice_plan=1" },
  { num: 4, name: "Reverse to Make Equal", method: "areTheyEqual", params: 2, site: "fbprep", categories: ["Arrays"],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=2869293499822992&ppid=454615229006519&practice_plan=0" },
  { num: 5, name: "Passing Yearbooks", method: "findSignatureCounts", site: "fbprep", categories: ["Arrays"],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=146466059993201&ppid=454615229006519&practice_plan=0" },
  { num: 6, name: "Minimizing Permutations", method: "minOperations", site: "fbprep", categories: ["Graphs"],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=292715105029046&ppid=454615229006519&practice_plan=0" },
  { num: 7, name: "Largest Triple Products", method: "findMaxProduct", site: "fbprep", categories: ["Heaps"],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=510655302929581&c=1487359448291480&ppid=454615229006519&practice_plan=0" },
  { num: 8, name: "Slow Sums", method: "getTotalTime", site: "fbprep", categories: ["Greedy algorithms"],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=836241573518034&c=1487359448291480&ppid=454615229006519&practice_plan=0" },
  { num: 9, name: "Element Swapping", method: "findMinArray", params: 2, site: "fbprep", categories: ["Greedy algorithms"],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=838749853303393&c=1487359448291480&ppid=454615229006519&practice_plan=0" },
  { num: 10, name: "Number of Visible Nodes", method: "visibleNodes", site: "fbprep", categories: [""],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=495004218121393&c=1487359448291480&ppid=454615229006519&practice_plan=0" },
  { num: 11, name: "Revenue Milestones", method: "getMilestoneDays", params: 2, site: "fbprep", categories: [""],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=192049171861831&c=1487359448291480&ppid=454615229006519&practice_plan=0" },
  { num: 12, name: "Balance Brackets", method: "isBalancedFb", site: "fbprep", categories: [""],
    url: "https://www.facebookrecruiting.com/portal/coding_practice_question/?problem_id=211548593612944&c=1487359448291480&ppid=454615229006519&practice_plan=0" },
  // { num: , name: "", method: "", site: "fbprep", categories: [""],
  //   url: "" },
  
  //--------- hackerrank ----------
  { num: 1, name: "Balanced Brackets", method: "isBalanced", site: "hackerrank", difficulty: "Medium",
    url: "https://www.hackerrank.com/challenges/balanced-brackets/problem" },
  { num: 2, name: "Tree: Height of a Binary Tree", method: "heightCode", site: "hackerrank", difficulty: "Easy",
    url: "https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem" },
  { num: 3, name: "Tree: Level Order Traversal", method: "levelOrderCode", site: "hackerrank", difficulty: "Easy",
    url: "https://www.hackerrank.com/challenges/tree-level-order-traversal/problem" },
  { num: 4, name: "Contacts", method: "contacts", site: "hackerrank", difficulty: "Medium",
    url: "https://www.hackerrank.com/challenges/contacts/problem" },
  { num: 5, name: "Find the Running Median", method: "runningMedian", site: "hackerrank", difficulty: "Hard",
    url: "https://www.hackerrank.com/challenges/find-the-running-median", incomplete: true },
  { num: 6, name: "Swap Nodes [Algo]", method: "swapNodes", site: "hackerrank", difficulty: "Easy",
    url: "https://www.hackerrank.com/challenges/swap-nodes-algo/problem" },
  // { num: , name: "", method: "", site: "hackerrank", difficulty: "Easy",
  //   url: "" },
  // https://www.hackerrank.com/challenges/find-the-running-median
  // https://www.hackerrank.com/challenges/swap-nodes-algo
  
  //--------- leetcode ----------
  { num: 2, name: "Add Two Numbers", method: "addTwoNumbers2", params: 2, site: "leetcode", difficulty: "Medium", tags: ['fb'],
    url: "https://leetcode.com/problems/add-two-numbers/" },
  { num: 3, name: "Length of Longest Substring", method: "lengthOfLongestSubstring", site: "leetcode", difficulty: "Medium",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters" },
  { num: 4, name: "Find Median Sorted Arrays", method: "findMedianSortedArrays", params: 2, site: "leetcode", difficulty: "Hard",
    url: "https://leetcode.com/problems/median-of-two-sorted-arrays" },
  { num: 5, name: "Longest Palindromic Substring", method: "longestPalindrome", site: "leetcode", difficulty: "Medium",
    url: "https://leetcode.com/problems/longest-palindromic-substring" },
  { num: 6, name: "ZigZag Conversion", method: "zigZagConvert", params: 2, site: "leetcode", difficulty: "Medium",
    url: "https://leetcode.com/problems/zigzag-conversion" },
  { num: 8, name: "String to Integer (atoi)", method: "myAtoi", site: "leetcode", difficulty: "Medium",
    url: "https://leetcode.com/problems/string-to-integer-atoi/submissions/" },
  { num: 43, name: "Multiply Strings", method: "multiply", params: 2, site: "leetcode", difficulty: "Medium",
    url: "https://leetcode.com/problems/multiply-strings/" },
  { num: 140, name: "Word Break II", method: "wordBreak", params: 2, site: "leetcode", difficulty: "Hard",
    url: "https://leetcode.com/problems/word-break-ii/" },
  { num: 187, name: "Repeated DNA Sequences", method: "findRepeatedDnaSequences", site: "leetcode", difficulty: "Medium",
    url: "https://leetcode.com/problems/repeated-dna-sequences" },
  { num: 199, name: "Binary Tree Right Side View", method: "rightSideView", site: "leetcode", difficulty: "Medium", tags: ['fb'],
    url: "https://leetcode.com/problems/binary-tree-right-side-view/" },
  { num: 219, name: "Contains Duplicate II", method: "containsNearbyDuplicate", params: 2, site: "leetcode", difficulty: "Easy", tags: ['fb'],
    url: "https://leetcode.com/problems/contains-duplicate-ii/" },
  { num: 227, name: "Basic Calculator II", method: "calculate", site: "leetcode", difficulty: "Medium", tags: ['fb'],
    url: "https://leetcode.com/problems/basic-calculator-ii/" },
  { num: 415, name: "Add Strings", method: "addStrings", params: 2, site: "leetcode", difficulty: "Easy",
    url: "https://leetcode.com/problems/add-strings/" },
  { num: 680, name: "Valid Palindrome II", method: "validPalindrome", site: "leetcode", difficulty: "Easy", tags: ['fb'],
    url: "https://leetcode.com/problems/valid-palindrome-ii/",  },
  { num: 993, name: "Number of Recent Calls", method: "numberOfRecentCalls", site: "leetcode", difficulty: "Easy",
    url: "https://leetcode.com/problems/number-of-recent-calls/" },
  { num: 1288, name: "Remove Covered Intervals", method: "removeCoveredIntervals", site: "leetcode", difficulty: "Medium",
    url: "https://leetcode.com/problems/remove-covered-intervals/" },
  { num: 1343, name: "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold", method: "numOfSubarrays", params: 3, site: "leetcode", difficulty: "Medium",
    url: "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/" },
  { num: 1608, name: "Special Array With X Elements Greater Than or Equal X", method: "specialArray", site: "leetcode", difficulty: "Easy",
    url: "https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x" },
  { num: 1609, name: "Even Odd Tree", method: "isEvenOddTree", site: "leetcode", difficulty: "Medium",
    url: "https://leetcode.com/problems/even-odd-tree/", dtCompleted: "2021-11-09T12:18:36.208Z" },
  { num: 9001, name: "Minimum Swaps to Group All 1's Together", method: "minSwaps", site: "leetcode", difficulty: "Medium", tags: ['amazon'],
    url: "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/" },//number is unknown
  { num: 1359, name: "Count All Valid Pickup and Delivery Options", method: "countOrders", site: "leetcode", difficulty: "Hard", tags: ['fb'],
    url: "https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/" },
  { num: 210, name: "Course Schedule II", method: "findOrder", params: 2, site: "leetcode", difficulty: "Medium", tags: ['fb'],
    url: "https://leetcode.com/problems/course-schedule-ii/", incomplete: true },
  // { num: , name: "", method: "", site: "leetcode", difficulty: "Easy", tags: ['fb'],
  //   url: "" },

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
  { num: 15, name: "Pascal’s Triangle", method: "pascalsTriangle", site: "code.golf",
    url: "https://code.golf/pascals-triangle#javascript" },
  { num: 16, name: "Poker", method: "poker", site: "code.golf",
    url: "https://code.golf/poker#javascript", incomplete: true },

  //--------- Project Euler ----------
  { num: 1, name: "Multiples of 3 and 5", method: "sumOfMultiples3and5", params: 2, site: "projecteuler",
    url: "https://projecteuler.net/problem=1" },
  
];