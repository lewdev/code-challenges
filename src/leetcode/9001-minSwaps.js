const minSwaps = s => {
  let c, oneCount = 0;
  for (let i = 0; i < s.length; i++) {
    c = s.charAt(i);
    if (c === "1") oneCount++;
  }
  let fromLeft = 0, fromRight = 0, rightChar;
  for (let i = 0; i < oneCount; i++) {
    c = s.charAt(i);
    rightChar = s.charAt(s.length - 1 - i);
    if (c === "1") fromLeft++;
    if (rightChar === "1") fromRight++;
  }
  if (fromLeft > fromRight) {
    return oneCount - fromLeft;
  }
  return oneCount - fromRight;
};

const minSwapsNotes = (
`This is the question I got for an Online Assessment.
I thought of the solution yesterday, a few days later. I feel dumb.
My initial solution was a greedy implementation testing out swaps in all variations which 
was too inefficient and caused the test cases with much larger data sets to timeout.`
);

const minSwapsTests = [
  ["0011", 0],
  ["00010111", 1],
  ["01001", 1],
  ["011011011", 2],
  ["010111011", 1],
  ["100010101011101101", 3],
];