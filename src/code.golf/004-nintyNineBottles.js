
const nintyNineBottlesCode = print => {

b=d=>`bottle${d==1?'':'s'} of beer`,w=d=>`${b(d)} on the wall`,m=d=>d?d:'no more';for(i=0;i<100;i++){
d=99-i;print(`${d?d:'No more'} ${w(d)}, ${m(d)} ${b(d)}.
${d?"Take one down and pass it around":"Go to the store and buy some more"}, ${d?m(d-1):99} ${w(d-1)}.\n`)}

};

const nintyNineBottles = () => {
  let output = [];
  nintyNineBottlesCode(str => output.push(str));
  return output.join("");
};