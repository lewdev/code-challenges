const multiply = (num1, num2) => {
  if (num1 === "0" || num2 === "0") return "0";

  const n1Arr = num1.split("").reverse();
  const n2Arr = num2.split("").reverse();
  let longer, shorter, n1Longer = n1Arr.length > n2Arr.length;
  longer = n1Longer ? n1Arr : n2Arr;
  shorter = !n1Longer ? n1Arr : n2Arr;

  let n1, n2, product = 0, output = "", carry = 0, sum = "0";
  for (let i = 0; i < shorter.length; i++) {
    product = 0;
    carry = 0;
    output = "";
    n1 = (shorter[i] ? parseInt(shorter[i]) : 0);
    for (let j = 0; j < longer.length; j++) {
      n2 = parseInt(longer[j]);
      product = (n1 * n2) + carry;
      if (product > 9 && j < longer.length - 1) {
        carry = Math.floor(product / 10);
        product = product % 10;
      }
      else carry = 0;
      output = product + output;
    }

    //add the "0"s after
    let k = i;
    while (k--) output += "0";

    //add products together
    sum = add(sum, output);
  }
  return sum ? sum : "0";
};

const add = (num1, num2) => {
  if (num1 === "0") return num2;
  if (num2 === "0") return num1;

  const n1Arr = num1.split("").reverse();
  const n2Arr = num2.split("").reverse();
  let longer, shorter, n1Longer = n1Arr.length > n2Arr.length;
  longer = n1Longer ? n1Arr : n2Arr;
  shorter = !n1Longer ? n1Arr : n2Arr;

  let carry = 0, sum, output = "";
  for (let i = 0; i < longer.length; i++) {
    sum = (shorter[i] ? parseInt(shorter[i]) : 0) + parseInt(longer[i]) + carry;
    if (sum > 9 && i < longer.length - 1) {
      carry = 1;
      sum -= 10;
    }
    else carry = 0;
    output = sum + output;
  }
  return output;
};

const multiplyTests = [
  [["2", "3"], "6"],
  [["123", "456"], "56088"],
  [["123456789", "987654321"], "121932631112635269"],
  [["9133", "0"], "0"],
  [["1200", "62176"], "74611200"],
  [["725071900", "6478"], "4697015768200"],
  [["18582506933032752", "366213329703"], "6805161738175006549873432656"],
  [["96423702883453279", "72156405165936898"], "6957587772858372748255887645188542"]
];
/*
6805161738175006549873432656
6805161738175006064682640066 <--me
                ^^^^^^^^^^^
*/