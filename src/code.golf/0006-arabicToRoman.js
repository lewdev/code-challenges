/*
https://sciencing.com/read-roman-numerals-4475255.html
based on seven letters: I, V, X, L, C, D and M
I = 1
V = 5

X = 10
L = 50

C = 100
D = 500

M = 1000
*/
const arabicToRomanCode = (print, arguments) => {
  let floor = Math.floor;
  let times = (str, t) => (new Array(t)).fill().map(() => str).join('');
  let baseRoman = (n, base1, base5, base10) => {
    let mod5 = n % 5;
    let base1Str = times(base1, mod5);
    if (floor(n / 5)) return !mod5 ? base5 : mod5 > 3 ? base1 + base10 : base5 + base1Str;
    return mod5 > 3 ? base1 + base5 : base1Str;
  };
  arguments.map(n => print(times('M', floor(n / 1000))
    + baseRoman(floor(n % 1000 / 100), 'C', 'D', 'M')
    + baseRoman(floor((n % 1000 % 100) / 10), 'X', 'L', 'C')
    + baseRoman(floor((n % 1000 % 100 % 10)), 'I', 'V', 'X')
  ));
  //*/
  //Minified using https://jscompress.com (267 chars)
  //https://javascript-minifier.com/
  //http://dean.edwards.name/packer/
  f=Math.floor,t=(o,e)=>new Array(e).fill().map(()=>o).join(""),r=(o,e,a,r)=>{l=f(o/5),m=o%5,o=t(e,m);return l?m?3<m?e+r:a+o:a:3<m?e+a:o};arguments.map(o=>print(t("M",f(o/1e3))+r(f(o%1e3/100),"C","D","M")+r(f(o%1e3%100/10),"X","L","C")+r(f(o%1e3%100%10),"I","V","X")));
};
const arabicToRoman = n => {
  let output = [];
  arabicToRomanCode(str => output.push(str + "\n"), [n]);
  return output.join(""); //for some reason, it won't return a successful match if `trim` isn't used
};

const arabicToRomanTests = [
  [900, "CM"],
  [2124, "MMCXXIV"],
  [2439, "MMCDXXXIX"],
  [2831, "MMDCCCXXXI"],
  [1268, "MCCLXVIII"],
  [9, "IX"],
  [4, "IV"],
  [3831, "MMMDCCCXXXI"],
  [1834, "MDCCCXXXIV"],
  [3427, "MMMCDXXVII"],
  [1964, "MCMLXIV"],
  [40, "XL"],
  [3695, "MMMDCXCV"],
  [404, "CDIV"],
  [2877, "MMDCCCLXXVII"],
  [3019, "MMMXIX"],
  [3236, "MMMCCXXXVI"],
  [3086, "MMMLXXXVI"],
  [90, "XC"],
  [400, "CD"]
];