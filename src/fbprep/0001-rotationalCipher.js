const ABC     = "abcdefghijklmnopqrstuvwxyz";
const ABC_CAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUM     = "1234567890";

const getRot = (cipher, char, rotationFactor) => {
  const index = cipher.indexOf(char);
  if (index > -1) return cipher.charAt((index + rotationFactor) % (cipher.length));
  return "";
};

function rotationalCipher(input, rotationFactor) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i);
    let rotChar = getRot(ABC, char, rotationFactor);
    if (!rotChar) rotChar = getRot(ABC_CAP, char, rotationFactor);
    if (!rotChar) rotChar = getRot(NUM, char, rotationFactor);
    if (!rotChar) rotChar += char;
    output += rotChar;
  }
  return output;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str) {
  var out = '["' + str + '"]';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var input_1 = "All-convoYs-9-be:Alert1.";
var rotationFactor_1 = 4;
var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
var output_1 = rotationalCipher(input_1, rotationFactor_1);
check(expected_1, output_1);

var input_2 = "abcdZXYzxy-999.@";
var rotationFactor_2 = 200;
var expected_2 = "stuvRPQrpq-999.@";
var output_2 = rotationalCipher(input_2, rotationFactor_2);
check(expected_2, output_2);

// Add your own test cases here

const rotationalCipherTests = [
  [[input_1, rotationFactor_1], expected_1],
  [[input_2, rotationFactor_2], expected_2],
];
