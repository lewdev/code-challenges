const LEFT = "([{";
const RIGHT = ")]}";

function isBalancedFb(s) {
  // Write your code here
  const stack = [];
  let c, leftBracketIndex, rightBracketIndex;
  for (let i = 0; i < s.length; i++) {
    c = s.charAt(i);
    leftBracketIndex = LEFT.indexOf(c);
    if (leftBracketIndex > -1) {
      stack.push(c);
    }
    else {
      rightBracketIndex = RIGHT.indexOf(c);
      if (!(rightBracketIndex > -1 && LEFT.indexOf(stack.pop()) === rightBracketIndex))
        return false;
    }
  }
  return stack.length === 0;
}

var s_1 = "{[(])}";
var expected_1 = false;
var output_1 = isBalancedFb(s_1);
check(expected_1, output_1);

var s_2 = "{{[[(())]]}}";
var expected_2 = true;
var output_2 = isBalancedFb(s_2);
check(expected_2, output_2);

// Add your own test cases here

const isBalancedFbTests = [
  [s_1, expected_1],
  [s_2, expected_2],
]