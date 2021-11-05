const OPERATORS = "/*+-";

const solve = (opIndex, eqArr) => {
  let solution;
  let operator = eqArr[opIndex];
  let num1 = eqArr[opIndex - 1];
  let num2 = eqArr[opIndex + 1];
  switch (operator) {
    case "/": solution = num1 / num2; break;
    case "*": solution = num1 * num2; break;
    case "-": solution = num1 - num2; break;
    default:
    case "+": solution = num1 + num2; break;
  }
  eqArr.splice(opIndex - 1, 3, Math.floor(solution));
  // console.log("opIndex=", opIndex, " | ", num1, operator, num2, "=", solution, eqArr);
}

const calculate = s => {
  const eqArr = [];
  s = s.replace(/\s+/, "");
  let item = "", c;
  for (let i = 0; i < s.length; i++) {
    c = s.charAt(i);
    if (OPERATORS.includes(c)) {
      eqArr.push(c);
    }
    else {
      item += c;
      if (i === s.length - 1 || (i < s.length - 1 && OPERATORS.includes(s.charAt(i + 1)))) {
        eqArr.push(parseInt(item));
        item = "";
      }
    }
  }
  for (let i = 1; i < eqArr.length - 1; i++) {
    if ("*/".includes(eqArr[i])) {
      solve(i, eqArr);
      i--;
    }
  }
  for (i = 1; i < eqArr.length - 1; i++) {
    if ("+-".includes(eqArr[i])) {
      solve(i, eqArr);
      i--;
    }
  }
  // console.log("END", eqArr);
  return eqArr[0];
};

const calculateTests = [
  ["3+2*2", 7],
  [" 3/2 ", 1],
  [" 3+5 / 2 ", 5],
  [" 33 + 50 / 2 ", 58],
  ["1-1+1", 1],
  ["2*3*4", 24]
];