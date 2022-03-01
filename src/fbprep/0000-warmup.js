/* ABCs
https://www.facebookrecruiting.com/portal/coding_puzzles/?puzzle=513411323351554
*/
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @return {number}
 */
 function getSum(A, B, C) {
  return A + B + C;
}


/* ALl Wrong
https://www.facebookrecruiting.com/portal/coding_puzzles/?puzzle=1082217288848574
*/
/**
 * @param {number} N
 * @param {string} C
 * @return {string}
 */
 function getWrongAnswers(N, C) {
  // Write your code here
  return C.split("").map(a => a === "A" ? "B" : "A").join("");
}


/* Battle Ship
https://www.facebookrecruiting.com/portal/coding_puzzles/?puzzle=3641006936004915
*/
/**
 * @param {number} R
 * @param {number} C
 * @param {number[][]} G
 * @return {number}
 */
 function getHitProbability(R, C, G) {
  // Write your code here
  let total = 0;
  G.forEach(a => a.forEach(b => total += b));
  return total / (R * C);
}


/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
 function getMaxAdditionalDinersCount(N, K, M, S) {
  // Write your code here
  //N = seats, K = seats space, M = diner count, S = seats arr
  //forward
  let a, b, j;
  for (let i = 0; i < S.length; i++) {
    a = S[i];
    if (a > 0) {
      //add seats back K times
      for (j = K - 1; j >= 0; j--) {
        if (i - j > 0) S.push(i - j);
      }
      //add forward back K times
      for (j = 0; j <= K; j--) {
        if (i + j > 0) S.push(i - j);
      }
    }
  }
  S.forEach((a, i) => {
    
  })
  return 0;
}
