const print12DaysOfChristmasCode = print => {
  var c='First,Second,Third,Four,Fif,Six,Seven,Eigh,Nin,Ten,Eleven,Twelf'.split(",")
  ,a='Twelve Drummers Drumming,Eleven Pipers Piping,Ten Lords-a-Leaping,Nine Ladies Dancing,Eight Maids-a-Milking,Seven Swans-a-Swimming,Six Geese-a-Laying,Five Gold Rings,Four Calling Birds,Three French Hens,Two Turtle Doves,A Partridge in a Pear Tree'.split(",")
  ,arr=[],gifts,size;
  for (let i = 12; i >= 1; i--) {
    gifts = a.filter((a,n) => n + 1 >= i);
    size = gifts.length;
    arr.push(`On the ${c[12-i] + (12-i > 2 ? 'th' : '')} day of Christmas
My true love sent to me
${gifts.map((a,n) => `${a}${n < size - 1 ? ',': '.'}${size > 1 && n === size - 2 ? ' and' : ''}\n`).join('')}`);
  }
  print(arr.join("\n"));
  return arr.join("\n").trim();
};
const print12DaysOfChristmas = function() {
  return print12DaysOfChristmasCode(() => {});
};

console.log(print12DaysOfChristmas());

/** Minified (619 bytes)
var c='First,Second,Third,Four,Fif,Six,Seven,Eigh,Nin,Ten,Eleven,Twelf'.split(","),a='Twelve Drummers Drumming,Eleven Pipers Piping,Ten Lords-a-Leaping,Nine Ladies Dancing,Eight Maids-a-Milking,Seven Swans-a-Swimming,Six Geese-a-Laying,Five Gold Rings,Four Calling Birds,Three French Hens,Two Turtle Doves,A Partridge in a Pear Tree'.split(","),t=[],g,s,i;for(i=12;i>=1;i--){g=a.filter((a,n)=>n+1>=i);s=g.length;t.push(`On the ${c[12-i]+(12-i>2?'th':'')} day of Christmas
My true love sent to me
${g.map((a,n)=>`${a}${n<s-1?',':'.'}${s>1&&n==s-2?' and':''}\n`).join('')}`)}print(t.join("\n"))
*/
/** Minified using Closure Compiler (https://closure-compiler.appspot.com/home)
for(var a="First Second Third Four Fif Six Seven Eigh Nin Ten Eleven Twelf".split(" "),b="Twelve Drummers Drumming;Eleven Pipers Piping;Ten Lords-a-Leaping;Nine Ladies Dancing;Eight Maids-a-Milking;Seven Swans-a-Swimming;Six Geese-a-Laying;Five Gold Rings;Four Calling Birds;Three French Hens;Two Turtle Doves;A Partridge in a Pear Tree".split(";"),c=[],f,g,h={g:12};1<=h.g;h={g:h.g},h.g--)f=b.filter(function(d){return function(e,k){return k+1>=d.g}}(h)),g=f.length,c.push("On the "+(a[12-h.g]+(2<12-h.g?"th":""))+" day of Christmas\nMy true love sent to me\n"+f.map(function(d,e){return""+d+(e<g-1?",":".")+(1<g&&e===g-2?" and":"")+"\n"}).join(""));print(c.join("\n"))
*/
const print12DaysOfChristmasTests = [
  ['n/a', `On the First day of Christmas
My true love sent to me
A Partridge in a Pear Tree.

On the Second day of Christmas
My true love sent to me
Two Turtle Doves, and
A Partridge in a Pear Tree.

On the Third day of Christmas
My true love sent to me
Three French Hens,
Two Turtle Doves, and
A Partridge in a Pear Tree.

On the Fourth day of Christmas
My true love sent to me
Four Calling Birds,
Three French Hens,
Two Turtle Doves, and
A Partridge in a Pear Tree.

On the Fifth day of Christmas
My true love sent to me
Five Gold Rings,
Four Calling Birds,
Three French Hens,
Two Turtle Doves, and
A Partridge in a Pear Tree.

On the Sixth day of Christmas
My true love sent to me
Six Geese-a-Laying,
Five Gold Rings,
Four Calling Birds,
Three French Hens,
Two Turtle Doves, and
A Partridge in a Pear Tree.

On the Seventh day of Christmas
My true love sent to me
Seven Swans-a-Swimming,
Six Geese-a-Laying,
Five Gold Rings,
Four Calling Birds,
Three French Hens,
Two Turtle Doves, and
A Partridge in a Pear Tree.

On the Eighth day of Christmas
My true love sent to me
Eight Maids-a-Milking,
Seven Swans-a-Swimming,
Six Geese-a-Laying,
Five Gold Rings,
Four Calling Birds,
Three French Hens,
Two Turtle Doves, and
A Partridge in a Pear Tree.

On the Ninth day of Christmas
My true love sent to me
Nine Ladies Dancing,
Eight Maids-a-Milking,
Seven Swans-a-Swimming,
Six Geese-a-Laying,
Five Gold Rings,
Four Calling Birds,
Three French Hens,
Two Turtle Doves, and
A Partridge in a Pear Tree.

On the Tenth day of Christmas
My true love sent to me
Ten Lords-a-Leaping,
Nine Ladies Dancing,
Eight Maids-a-Milking,
Seven Swans-a-Swimming,
Six Geese-a-Laying,
Five Gold Rings,
Four Calling Birds,
Three French Hens,
Two Turtle Doves, and
A Partridge in a Pear Tree.

On the Eleventh day of Christmas
My true love sent to me
Eleven Pipers Piping,
Ten Lords-a-Leaping,
Nine Ladies Dancing,
Eight Maids-a-Milking,
Seven Swans-a-Swimming,
Six Geese-a-Laying,
Five Gold Rings,
Four Calling Birds,
Three French Hens,
Two Turtle Doves, and
A Partridge in a Pear Tree.

On the Twelfth day of Christmas
My true love sent to me
Twelve Drummers Drumming,
Eleven Pipers Piping,
Ten Lords-a-Leaping,
Nine Ladies Dancing,
Eight Maids-a-Milking,
Seven Swans-a-Swimming,
Six Geese-a-Laying,
Five Gold Rings,
Four Calling Birds,
Three French Hens,
Two Turtle Doves, and
A Partridge in a Pear Tree.`.trim()],
];
