const multiply = (num1, num2) => {
  const n1Arr = num1.split("").reverse();
  const n2Arr = num2.split("").reverse();
  console.log(`\n\n\n${num1} * ${num2}`);
  let n1, n2, product = 0, output = "", carry = 0;
  for (let i = 0; i < n1Arr.length; i++) {
    product = 0;
    carry = 0;
    n1 = parseInt(n1Arr[i]);
    for (let j = 0; j < n2Arr.length; j++) {
      n2 = parseInt(n2Arr[j]) * Math.pow(10, j);
      if (!n2 || !(n1 * n2)) continue;
      product += (n1 * n2) + carry;
      console.log(n1, " * ", n2, " = ", (n1 * n2), ", carry=", carry, ", output=", output);
      if (product > 9 && i < n1Arr.length - 1) {
        carry = Math.floor(product / 10);
        product = product % 10;
      }
      else carry = 0;
    }
    output = product + output;
  }
  while (output.charAt(0) === "0") {
    output = output.substr(1);
  }
  return output ? output : "0";
};

const multiplyTests = [
  [["2", "3"], "6"],
  [["123", "456"], "56088"],
  [["123456789", "987654321"], "121932631112635269"],
  [["9133", "0"], "0"],
  [["1200", "62176"], "74611200"],
  [["725071900", "6478"], "4697015768200"],
  [["18582506933032752", "366213329703"], "6805161738175006549873432656"],
];
/*
6805161738175006549873432656
6805161738175006064682640066 <--me
                ^^^^^^^^^^^
*/