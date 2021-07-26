
const divisorsCode = () => {
  for(n=1;n<=100;n++){
    const r = Math.floor(Math.sqrt(n));
    let factors = {};
    for (let i = 1; i <= r; i++) {
      if (n % i === 0) {
        factors[i] = 1;
        factors[n / i] = 1;
      }
    }
    print(Object.keys(factors).join(" "));
  }
//Minified using JSCompress 
//for(n=1;n<=100;n++){a=Math.floor(Math.sqrt(n));let o={};for(let t=1;t<=a;t++)n%t==0&&(o[t]=1,o[n/t]=1);print(Object.keys(o).join(" "))}
};

const divisors = () => {
  let output = [];
  divisorsCode(str => output.push(str + "\n"));
  return output.join(""); //for some reason, it won't return a successful match if `trim` isn't used
};