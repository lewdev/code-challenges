/**
 * Emojify
 * 
 * Given each of the following ASCII emoticons print the corresponding Unicode emoji.
 * 
 * Note despite how they appear below, there are no spaces in the emoticons.
 */

const emojifyCode = (print, arguments) => {
  var e=`😀 :-D 🙂 :-) 😐 :-| 🙁 :-( 😕 :-\\ 😗 :-* 😮 :-O 🤐 :-# 😅 ':-D 😓 ':-( 😂 :'-) 😢 :'-( 😜 ;-P 😝 X-P 😆 X-) 😇 O:-) 😉 ;-) 😳 :-$ 😶 :- 😎 B-) 😏 :-J 😈 }:-) 👿 }:-( 😡 :-@ 😛 :-P`.split(" ");
  arguments.forEach(a=>print(e[e.indexOf(a) - 1]));
};

/**
 * Minified submission - 299 bytes (38th), 224 chars (36th)
var e=`😀 :-D 🙂 :-) 😐 :-| 🙁 :-( 😕 :-\\ 😗 :-* 😮 :-O 🤐 :-# 😅 ':-D 😓 ':-( 😂 :'-) 😢 :'-( 😜 ;-P 😝 X-P 😆 X-) 😇 O:-) 😉 ;-) 😳 :-$ 😶 :- 😎 B-) 😏 :-J 😈 }:-) 👿 }:-( 😡 :-@ 😛 :-P`.split(" ");arguments.forEach(a=>print(e[e.indexOf(a) - 1]))
*/

const emojify = arguments => {
  //console.log("arguments=", arguments);
  let output = [];
  emojifyCode(str => output.push(str), arguments);
  return output.join("\n");
};

const emojifyTests = [
  [
    `:-P X-) }:-) ;-P :-* :-( X-P :-| :'-) :'-( :-O :-\\ :-J :-) :-# O:-) ;-) :-$ ':-( ':-D }:-) }:-( :- :-@ B-) :-D`.split(" "),
    "😛 😆 😈 😜 😗 🙁 😝 😐 😂 😢 😮 😕 😏 🙂 🤐 😇 😉 😳 😓 😅  😶 😡 😎 😀".split(" ").join(" \n").trim()
  ]
];