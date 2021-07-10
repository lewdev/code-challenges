/**
 * @param {number[][]} intervals
 * @return {number}
 * Constraints:
 * - 1 <= intervals.length <= 1000
 * - intervals[i].length == 2
 * - 0 <= intervals[i][0] < intervals[i][1] <= 10^5
 * - All the intervals are unique.
 */
var removeCoveredIntervals = function(intervals) {
  const size = intervals.length;
  let i, j, a, b, total = size;
  for (i = 0; i < total; i++) {
    a = intervals[i];
    for (j = 0; j < total; j++) {
      if (i === j) continue;
      b = intervals[j];
      if (a && a[0] <= b[0] && b[1] <= a[1]) {
        intervals.splice(j, 1);
        total--; i--; j--;
      }
      // const isCovered = a[0] <= b[0] && b[1] <= a[1];
      // if (isCovered) {
      //   console.log(`[${a}], [${b}] isCovered=${isCovered}`);
      //   total++;
      // }
    }
  }
  return intervals.length;
};

const removeCoveredIntervalsTests = [
  [[[1,4],[3,6],[2,8]], 2],//Interval [3,6] is covered by [2,8], therefore it is removed.
  [[[1,4],[2,3]], 1],
  [[[0,10],[5,12]], 2],
  [[[3,10],[4,10],[5,11]], 2],
  [[[1,2],[1,4],[3,4]], 1],
  [[[34335,39239],[15875,91969],[29673,66453],[53548,69161],[40618,93111]],2]
];