/*
Approach 1: DFS
Goal: Get Topological Ordered

T: O(n) or O(V+E) verticies and edges. We evaluate each node only once.
S: O(V+E) adjacency list + call stack

O(E) because the adjacency list contains each edge.

Because we have a recursion call stack, we have an additional O(E) space used.
*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

var findOrder1 = function(n, prerequisites) {
  const WHITE = 1;
  const GRAY = 2;
  const BLACK = 3;

  const colorMap = {};
  const adjList = {};
  const topologicalOrder = [];
  let isPossible = true;

  const dfs = num => {
    if (!isPossible) return;

    colorMap[num] = GRAY; // visited

    if (adjList[num]) {
      //dfs traverse all neighbors
      for (const neighbor of adjList[num]) {
        if (colorMap[neighbor] === WHITE) {
          dfs(neighbor);
        }
        else if (colorMap[neighbor] === GRAY) {
          //if we find a neighbor already visited
          //we've discovered a internal loop making it impossible
          isPossible = false;
        }
      }
    }
    colorMap[num] = BLACK; // done
    topologicalOrder.push(num);
  };

  // init colorMap
  for (let i = 0; i < n; i++) {
    colorMap[i] = WHITE; //not visited
  }

  // init adjacency list
  for (const [a, b] of prerequisites) {
    if (!adjList[b]) adjList[b] = [];
    adjList[b].push(a);
  }

  //dfs each available number not visited yet
  for (let i = 0; i < n; i++) {
    if (colorMap[i] === WHITE) dfs(i);
  }

  if (isPossible) return topologicalOrder.reverse();
  return [];
};