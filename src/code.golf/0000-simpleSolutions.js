

//https://code.golf/fibonacci#javascript
const fibonacci = print => {
f=n=>n<2?n:f(n-2)+f(n-1);for(n=0;n<=30;n++)print(f(n));
};

//https://code.golf/happy-numbers#javascript
const happyNumbers = print => {
  h=(n,c)=>{
    r=(""+n).split("").map(i=>i*i).reduce((a,b)=>a+b);
    return r === 1 ? 1 : (c > 3 ? false : h(r,++c));
  };
  for(n=1;n<200;n++) {
    if (h(n,0) === 1) print(n);
  }
  //Minified using JSCompress
  //for(h=(n,p)=>(r=(""+n).split("").map(n=>n*n).reduce((n,r)=>n+r),1===r?1:!(3<p)&&h(r,++p)),n=1;n<200;n++)1===h(n,0)&&print(n);
};

//https://code.golf/prime-numbers#javascript
const primeNumbers = () => {
  for(n=1;n<=100;n++){
    const r = Math.floor(Math.sqrt(n));
    let factors = {};
    for (let i = 1; i <= r; i++) {
      if (n % i === 0) {
        factors[i] = 1;
        factors[n / i] = 1;
      }
    }
    let arr = Object.keys(factors);
    if (arr.length === 2) print(n);
  }
  //Minified using JSCompress
  //for(n=1;n<=100;n++){a=Math.floor(Math.sqrt(n));e={};for(t=1;t<=a;t++)n%t==0&&(e[t]=1,e[n/t]=1);t=Object.keys(e);2===t.length&&print(n)}
};


//https://code.golf/quine#javascript

const quine = () => {
  (function $(){print('('+$.toString()+')();');})();
};

const unitedStates = arguments => {
s="Alabama,AL,Alaska,AK,Arizona,AZ,Arkansas,AR,California,CA,Colorado,CO,Connecticut,CT,Delaware,DE,District of Columbia,DC,Florida,FL,Georgia,GA,Hawaii,HI,Idaho,ID,Illinois,IL,Indiana,IN,Iowa,IA,Kansas,KS,Kentucky,KY,Louisiana,LA,Maine,ME,Maryland,MD,Massachusetts,MA,Michigan,MI,Minnesota,MN,Mississippi,MS,Missouri,MO,Montana,MT,Nebraska,NE,Nevada,NV,New Hampshire,NH,New Jersey,NJ,New Mexico,NM,New York,NY,North Carolina,NC,North Dakota,ND,Ohio,OH,Oklahoma,OK,Oregon,OR,Pennsylvania,PA,Rhode Island,RI,South Carolina,SC,South Dakota,SD,Tennessee,TN,Texas,TX,Utah,UT,Vermont,VT,Virginia,VA,Washington,WA,West Virginia,WV,Wisconsin,WI,Wyoming,WY".split(",");
arguments.map(a=>print(s[s.indexOf(a)+1]));
};

