const abundantNumbersCode = print => {
/*
  for (let num = 1; num <= 200; num++) {
    const n = Math.floor(Math.sqrt(num));
    let factors = {};
    for (let i = 1; i <= n; i++) {
      if (num % i === 0) {
        // console.log(`num=${num}, i=${i}, num%i=${num % i}`);
        factors[i] = 1;
        if (i !== 1) factors[num / i] = 1;
      }
    }
    if (Object.keys(factors).map(a => parseInt(a)).reduce((acc, curr) => acc + curr) > num) {
      // const keySum = keys.reduce((acc, curr) => acc + curr);
      // console.log(num, keySum, keys, keys.join(","));
      print(num);
    }
  }
*/

//Minified using https://jscompress.com (86 chars)
for(r=1;r<=200;r++){b=Math.floor(Math.sqrt(r));e={};for(t=1;t<=b;t++)r%t==0&&(e[t]=1)!==t&&(e[r/t]=1);Object.keys(e).map(t=>parseInt(t)).reduce((t,e)=>t+e)>r&&print(r)}

};

const abundantNumbers = () => {
  let output = [];
  abundantNumbersCode(str => output.push(str + "\n"));
  return output.join("").trim(); //for some reason, it won't return a successful match if `trim` isn't used
};

const abundantNumbersTests = [
  ['', `12
18
20
24
30
36
40
42
48
54
56
60
66
70
72
78
80
84
88
90
96
100
102
104
108
112
114
120
126
132
138
140
144
150
156
160
162
168
174
176
180
186
192
196
198
200`],
];
