//Test won't pass here, but it passes on the website
const diamondsCode = print => {
  const N = "\n",   //newline
    S = ' ',    //space
    r = (s, n) => (s+"").repeat(n), //repeat string n times
    p = (f, n) => (new Array(n)).fill().map(f) //repeat function n times
  ;
  for (i=1;i<=9;i++){
    print(
      p((a,j) =>
        r(S,(i==1 || j < Math.floor((i*2+1)/2)-1 ? 9-j : Math.abs(9-(i*2-(j+2)))))//Spacing
        +
        (j < ((i * 2 + 1) / 2) - 1 ?
          p((a,k)=>
            (k < j + 1 ? k + 1 : (j * 2 + 1) - k)
            , j * 2 + 1
          ).join("")
          : p((a,k)=>
            (k < ((i*2-1)-j) ? k + 1 : ((i*2-1)-j) - (k - ((i*2-1)-j)+1))
            , ((i*2-1)-j) * 2 - 1
          ).join(""))
      , (i*2-1)).join(N) + N
    );
  }
  //Minified using https://jscompress.com
  //M=Math,N="\n",S=" ",r=(i,r)=>(i+"").repeat(r),p=(i,r)=>new Array(r).fill().map(i);for(i=1;i<=9;i++)print(p((a,n)=>r(S,1==i||n<M.floor((2*i+1)/2)-1?9-n:(9-(2*i-(n+2))))+(n<(2*i+1)/2-1?p((i,r)=>r<n+1?r+1:2*n+1-r,2*n+1):p((r,p)=>p<2*i-1-n?p+1:2*i-1-n-(p-(2*i-1-n)+1),2*(2*i-1-n)-1)).join(""),2*i-1).join(N)+N);
};

const diamonds = () => {
  let output = [];
  diamondsCode(str => output.push(str + "\n"));
  return output.join(""); //for some reason, it won't return a successful match if `trim` isn't used
};

const diamondsTests = [
  ['', `         1

         1
        121
         1

         1
        121
       12321
        121
         1

         1
        121
       12321
      1234321
       12321
        121
         1

         1
        121
       12321
      1234321
     123454321
      1234321
       12321
        121
         1

         1
        121
       12321
      1234321
     123454321
    12345654321
     123454321
      1234321
       12321
        121
         1

         1
        121
       12321
      1234321
     123454321
    12345654321
   1234567654321
    12345654321
     123454321
      1234321
       12321
        121
         1

         1
        121
       12321
      1234321
     123454321
    12345654321
   1234567654321
  123456787654321
   1234567654321
    12345654321
     123454321
      1234321
       12321
        121
         1

         1
        121
       12321
      1234321
     123454321
    12345654321
   1234567654321
  123456787654321
 12345678987654321
  123456787654321
   1234567654321
    12345654321
     123454321
      1234321
       12321
        121
         1`]
];