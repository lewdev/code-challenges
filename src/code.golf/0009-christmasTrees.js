//Test won't pass here, but it passes on the website
const christmasTreesCode = print => {
  const A = '*',//asterisk
    N = "\n",   //newline
    S = ' ',    //space
    r = (s, n) => s.repeat(n), //repeat string n times
    p = (f, n) => (new Array(n)).fill().map(f) //repeat function n times
  ;
  for (i=3;i<=9;i++){
    print(
      p((a,j) => r(S,i-j) + r(A,(j+1)*2-1), i).join(N)
      + N
      + r(S, i) + A
      + N
    );
  }
  //Minified using https://jscompress.com
  //for(A="*",N="\n",S=" ",r=(i,r)=>i.repeat(r),p=(i,r)=>new Array(r).fill().map(i),i=3;i<=9;i++)print(p((p,n)=>r(S,i-n)+r(A,2*(n+1)-1),i).join(N)+N+r(S,i)+A+N);
};

const christmasTrees = () => {
  let output = [];
  christmasTreesCode(str => output.push(str + "\n"));
  return output.join(""); //for some reason, it won't return a successful match if `trim` isn't used
};

const christmasTreesTests = [
  ['', `   *
  ***
 *****
   *

    *
   ***
  *****
 *******
    *

     *
    ***
   *****
  *******
 *********
     *

      *
     ***
    *****
   *******
  *********
 ***********
      *

       *
      ***
     *****
    *******
   *********
  ***********
 *************
       *

        *
       ***
      *****
     *******
    *********
   ***********
  *************
 ***************
        *

         *
        ***
       *****
      *******
     *********
    ***********
   *************
  ***************
 *****************
         *`]
];