// Add any extra import statements you may need here


// Add any helper functions you may need here


function getMilestoneDays(revenues, milestones) {
  let total = 0;
  let milestoneIndex = 0;
  const output = [];
  const revenueDays = [];
  for (let i = 0; i < revenues.length; i++) {
    total += revenues[i];
    revenueDays.push(total);
  }
  for (let j = 0; j < milestones.length; j++) {
    for (let i = 0; i < revenueDays.length; i++) {
      if (!output[j] && revenueDays[i] >= milestones[j]) {
        output.splice(j, 0, i + 1);
      }
    }
    if (!milestones[j]) milestones[j] = -1;
  }
  return output;
};

var revenues_1 = [100, 200, 300, 400, 500];
var milestones_1 = [300, 800, 1000, 1400]
var expected_1 = [2, 4, 4, 5];
var output_1 = getMilestoneDays(revenues_1, milestones_1);
check(expected_1, output_1);

var revenues_2 = [700, 800, 600, 400, 600, 700];
var milestones_2 = [3100, 2200, 800, 2100, 1000];
var expected_2 = [5, 4, 2, 3, 2];
var output_2 = getMilestoneDays(revenues_2, milestones_2);
check(expected_2, output_2);

// Add your own test cases here

const getMilestoneDaysTests = [
  [[revenues_1, milestones_1], expected_1],
  [[revenues_2, milestones_2], expected_2],
];