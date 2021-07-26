//Test won't pass here, but it passes on the website
const cubesCode = print => {
  const H = '─',//horizontal
  V = '│',//vertical
  D = '╱',//diagonal
  C = '█',//corner
  N = "\n",//new line
  S = ' ',
  r = (s, n) => s.repeat(n),
  p = (f, n) => (new Array(n)).fill().map(f);
  for (i=0;i<7;i++){
    print(
      r(S, i + 2) + C + r(H, (i + 1) * 4) + C + N
      + p((a,j) => r(S,i - j + 1) + D + r(S,(i+1)*4) + D + r(S,j) + V, i + 1).join(N)
      + N
      + C + r(H, (i + 1) * 4) + C + r(S, i + 1) + V + N
      + p((a,j) => V + r(S,(i+1)*4) + V + r(S,j<=i?i+1:(i+1)-(j-i)) + (j>i?D:'') + (j<i?V:j==i?C:''), (i+1)*2).join(N)
      + N
      + C + r(H, (i + 1) * 4) + C + r(S, i + 1)
      + N
    );
  }
  //Minified using JSCompress
  //https://jscompress.com/
  //H="─",V="│",D="╱",C="█",N="\n",S=" ",r=(i,r)=>i.repeat(r),p=(i,r)=>new Array(r).fill().map(i);for(i=0;i<7;i++)print(r(S,i+2)+C+r(H,4*(i+1))+C+N+p((C,N)=>r(S,i-N+1)+D+r(S,4*(i+1))+D+r(S,N)+V,i+1).join(N)+N+C+r(H,4*(i+1))+C+r(S,i+1)+V+N+p((N,n)=>V+r(S,4*(i+1))+V+r(S,n<=i?i+1:i+1-(n-i))+(n>i?D:"")+(n<i?V:n==i?C:""),2*(i+1)).join(N)+N+C+r(H,4*(i+1))+C+r(S,i+1)+N);
};
const cubes = () => {
  let output = [];
  cubesCode(str => output.push(str + "\n"));
  return output.join(""); //for some reason, it won't return a successful match if `trim` isn't used
};

const cubesTests = [
  ['',
`  █────█
 ╱    ╱│
█────█ │
│    │ █
│    │╱
█────█

   █────────█
  ╱        ╱│
 ╱        ╱ │
█────────█  │
│        │  │
│        │  █
│        │ ╱
│        │╱
█────────█

    █────────────█
   ╱            ╱│
  ╱            ╱ │
 ╱            ╱  │
█────────────█   │
│            │   │
│            │   │
│            │   █
│            │  ╱
│            │ ╱
│            │╱
█────────────█

     █────────────────█
    ╱                ╱│
   ╱                ╱ │
  ╱                ╱  │
 ╱                ╱   │
█────────────────█    │
│                │    │
│                │    │
│                │    │
│                │    █
│                │   ╱
│                │  ╱
│                │ ╱
│                │╱
█────────────────█

      █────────────────────█
     ╱                    ╱│
    ╱                    ╱ │
   ╱                    ╱  │
  ╱                    ╱   │
 ╱                    ╱    │
█────────────────────█     │
│                    │     │
│                    │     │
│                    │     │
│                    │     │
│                    │     █
│                    │    ╱
│                    │   ╱
│                    │  ╱
│                    │ ╱
│                    │╱
█────────────────────█

       █────────────────────────█
      ╱                        ╱│
     ╱                        ╱ │
    ╱                        ╱  │
   ╱                        ╱   │
  ╱                        ╱    │
 ╱                        ╱     │
█────────────────────────█      │
│                        │      │
│                        │      │
│                        │      │
│                        │      │
│                        │      │
│                        │      █
│                        │     ╱
│                        │    ╱
│                        │   ╱
│                        │  ╱
│                        │ ╱
│                        │╱
█────────────────────────█

        █────────────────────────────█
       ╱                            ╱│
      ╱                            ╱ │
     ╱                            ╱  │
    ╱                            ╱   │
   ╱                            ╱    │
  ╱                            ╱     │
 ╱                            ╱      │
█────────────────────────────█       │
│                            │       │
│                            │       │
│                            │       │
│                            │       │
│                            │       │
│                            │       │
│                            │       █
│                            │      ╱
│                            │     ╱
│                            │    ╱
│                            │   ╱
│                            │  ╱
│                            │ ╱
│                            │╱
█────────────────────────────█`]
];