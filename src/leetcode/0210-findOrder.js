/**
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you 
 * must take course bi first if you want to take course ai.
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const coursesArr = (new Array(numCourses)).fill().values();
  console.log("coursesArr", coursesArr);

  if (prerequisites.length === 0) return coursesArr;

  const courseToPre = {};
  const preToCourses = {};
  let pre;
  for (let i = 0; i < prerequisites.length; i++) {
    pre = prerequisites[i];
    courseToPre[pre[0]] = 1;

    if (!preToCourses[pre[1]]) preToCourses[pre[1]] = [];
    preToCourses[pre[1]].push(pre[0]);
  }

  const coursesCanTake = [];
  for (let i = 0; i < numCourses; i++) {
    if (!courseToPre[i]) coursesCanTake.push(i);
  }

  console.log(coursesCanTake);

  if (coursesCanTake.length === 0) return coursesArr;

  const result = takeCourse(numCourses, coursesCanTake, preToCourses, []);
  console.log("MAIN RESULT", result);
  return result;
};

const takeCourse = (numCourses, coursesCanTake, preToCourses, taken) => {
  console.log("takeCourse", numCourses, coursesCanTake, preToCourses, taken);
  if (taken.length === numCourses) return taken;
  for (let i = 0; i < coursesCanTake.length; i++) {
    console.log("takeCourse 1", coursesCanTake[i]);
    const newCoursesCanTake = preToCourses[coursesCanTake[i]] || [];
    if (taken.indexOf(coursesCanTake[i]) === -1) {
      console.log("takeCourse 2");
      let result = takeCourse(numCourses, [...coursesCanTake, ...newCoursesCanTake], preToCourses, [...taken, coursesCanTake[i]]);
      console.log(result);
      if (result.length === numCourses) {
        console.log("numCourses taken! result", result);
        return result;
      }
    }
  }
  return [];
};

const findOrderTests = [
  // [[2, [[1,0]]], [0,1]],
  // [[4, [[1,0], [2,0], [3,1], [3,2]]], [0,2,1,3]],
  [[1, []], [0]],
]