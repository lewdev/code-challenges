var RecentCounter = function() {
  this.requests = [];
};

/**
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
  if (!t) return null;
  this.requests.push(t);
  return this.requests.filter(time => (time && time >= t - 3000 && time <= t)).length;
};
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
const numberOfRecentCalls = requests => {
  const obj = new RecentCounter();
  const responses = [];
  requests.map(t => responses.push(obj.ping(t)));
  return responses;
};

const numberOfRecentCallsTests = [
  [[null, 1, 100, 3001, 3002], [null, 1, 2, 3, 3]],
];
