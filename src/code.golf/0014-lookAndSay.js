const lookAndSayCode = print => {

n="1";print(n);for(i=0;i<19;i++){t=0;arr=""
for(j=0;j<n.length;j++){t++;c=n.charAt(j);if(c!==n.charAt(j+1)){arr+=t+""+c;t=0}}print(n=arr)}

};

const lookAndSay = () => {
  let output = [];
  lookAndSayCode(str => output.push(str));
  return output.join("\n");
};

const lookAndSayTests = [
['',`1
11
21
1211
111221
312211
13112221
1113213211
31131211131221
13211311123113112211
11131221133112132113212221
3113112221232112111312211312113211
1321132132111213122112311311222113111221131221
11131221131211131231121113112221121321132132211331222113112211
311311222113111231131112132112311321322112111312211312111322212311322113212221
132113213221133112132113311211131221121321131211132221123113112221131112311332111213211322211312113211
11131221131211132221232112111312212321123113112221121113122113111231133221121321132132211331121321231231121113122113322113111221131221
31131122211311123113321112131221123113112211121312211213211321322112311311222113311213212322211211131221131211132221232112111312111213111213211231131122212322211331222113112211
1321132132211331121321231231121113112221121321132122311211131122211211131221131211132221121321132132212321121113121112133221123113112221131112311332111213122112311311123112111331121113122112132113213211121332212311322113212221
11131221131211132221232112111312111213111213211231132132211211131221131211221321123113213221123113112221131112311332211211131221131211132211121312211231131112311211232221121321132132211331121321231231121113112221121321133112132112312321123113112221121113122113121113123112112322111213211322211312113211`
]
];