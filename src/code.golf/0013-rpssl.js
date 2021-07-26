const rpsslCode = (print, arguments) => {
  g="✂ cuts 📄 covers 💎 crushes 🦎 poisons 🖖 smashes ✂ decapitates 🦎 eats 📄 disproves 🖖 vaporizes 💎 crushes ✂".split(" ");
  arguments.map(a=>{
    let e = a.split(/.*?/u);
    a=e[0],b=e[1];
    y=(i,j)=>{
      c=g.indexOf(a,i|0);
    d=g.indexOf(b,j|0);
      if (b==g[c+2]){print(`${a} ${g[c+1]} ${b}`);return 1}
      else if (a==g[d+2]){print(`${b} ${g[d+1]} ${a}`);return 1}
      return 0;
    };
    if (a==b)print("Tie");
    else if (!y(0,0)) {
      y(g.indexOf(a)+1,g.indexOf(b)+1)
    }
  });
//Minified using packer
//g="✂ cuts 📄 covers 💎 crushes 🦎 poisons 🖖 smashes ✂ decapitates 🦎 eats 📄 disproves 🖖 vaporizes 💎 crushes ✂".split(" ");arguments.map(a=>{let e=a.split(/.*?/u);a=e[0],b=e[1];y=(i,j)=>{c=g.indexOf(a,i|0);d=g.indexOf(b,j|0);if(b==g[c+2]){print(`${a} ${g[c+1]} ${b}`);return 1}else if(a==g[d+2]){print(`${b} ${g[d+1]} ${a}`);return 1}return 0};if(a==b)print("Tie");else if(!y(0,0)){y(g.indexOf(a)+1,g.indexOf(b)+1)}});
};
const rpssl = arguments => {
  let output = [];
  rpsslCode(str => output.push(str + "\n"), arguments);
  return output.join("").trim(); //for some reason, it won't return a successful match if `trim` isn't used
};

const rpsslTests = [
  [`💎✂ 🦎🦎 💎💎 📄✂ ✂✂ 📄🖖 🖖🦎 🖖💎 🖖✂ 🖖🖖 📄💎 ✂📄 💎🦎 🦎📄 📄📄 📄🦎 ✂💎 💎📄 🖖📄 💎🖖 🦎✂ ✂🖖 ✂🦎 🦎🖖 🦎💎`.split(' '), `💎 crushes ✂
Tie
Tie
✂ cuts 📄
Tie
📄 disproves 🖖
🦎 poisons 🖖
🖖 vaporizes 💎
🖖 smashes ✂
Tie
📄 covers 💎
✂ cuts 📄
💎 crushes 🦎
🦎 eats 📄
Tie
🦎 eats 📄
💎 crushes ✂
📄 covers 💎
📄 disproves 🖖
🖖 vaporizes 💎
✂ decapitates 🦎
🖖 smashes ✂
✂ decapitates 🦎
🦎 poisons 🖖
💎 crushes 🦎`],
];