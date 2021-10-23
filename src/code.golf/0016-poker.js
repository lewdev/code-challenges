
//Spades 0/Hearts 1/Diamonds 2/Clubs 3
deck="🂡🂮🂭🂫🂪🂩🂨🂧🂦🂥🂤🂣🂢🂱🂾🂽🂻🂺🂹🂸🂷🂶🂵🂴🂳🂲🃁🃎🃍🃋🃊🃉🃈🃇🃆🃅🃄🃃🃂🃑🃞🃝🃛🃚🃙🃘🃗🃖🃕🃔🃓🃒".split(/.*?/u);

const pokerCode = (print, arguments) => {
  print(arguments.map(hand => {
    handArr = hand.split(/.*?/u).map(card => {
      cardIndex = deck.indexOf(card);
      return { num: cardIndex % 13, suit: Math.floor(cardIndex / 13) };
    });
    handArr.sort((a, b) => a.num - b.num);
    let isStraight = isFlush = isFour = isFull = isThree = isTwoPair = isPair = true;
    let prevCard, map = {};
    handArr.map(card => {
      const {num, suit} = card;
      if (prevCard && num + 1 !== prevCard.num) isStraight = false;
      if (prevCard && suit !== prevCard.suit) isFlush = false;
      index = card.suit+""+num;
      if (!map[num]) map[num] = 0;
      map[num]++;
      prevCard = card;
    });
    Object.keys(map).forEach(key => {
      if (map[key] === 4) {
        isFull = false;
        isThree = false;
        isTwoPair = false;
        isPair = false;
      }
      else if (map[key] === 3) isThree = false;
    })
    if (isStraight && isFlush) if (handArr[4].num === 12) return "Royal Flush"; else return "Straight Flush";
    return "High Card";
  }).join("\n"));
};

const poker = arguments => {
  let output = [];
  pokerCode(str => output.push(str), arguments);
  return output.join("\n");
};

const pokerTests = [
["🂢🃆🃑🂾🃛 🂪🂤🂥🂻🃒 🃃🂳🃓🃉🂣 🃓🃛🃘🃝🃔 🃗🃞🃖🃓🃘 🃚🃞🃛🃑🃝 🂡🂭🂫🂪🂮 🂱🂮🂲🂳🂴 🂹🂸🂷🂺🂶 🃗🃚🂱🂪🂸 🂥🂤🂣🂢🂡 🃎🃊🃁🃋🃍 🂪🂵🃑🂻🂱 🃃🂢🂪🃕🂴 🃍🃒🃕🃓🃑 🂻🂺🂾🂽🂹 🂵🂹🂾🂺🂱 🃞🃑🂱🂮🂾 🃈🃑🂽🂭🂨 🃃🃑🃄🃂🃅 🂲🂳🂱🂭🂮 🃄🂤🂹🂲🃔 🂤🃂🂩🂲🂢 🃙🃑🃃🂩🃁 🃝🂽🃍🂭🃞 🂱🂾🂺🂻🂽 🃎🂨🂮🂾🃞 🃇🂧🂳🂷🂣 🂧🃄🂷🂤🂴 🃄🃂🂾🃃🃁 🂨🃇🃉🂪🃖 🂺🂽🃞🂡🃛 🃃🃇🂢🃒🃂 🃒🃔🃎🃓🃑 🃎🂦🃚🂲🂶 🃂🂨🃅🂢🂥 🃁🂾🃃🃈🃅".split(" "),
`High Card
High Card
Four of a Kind
Flush
Flush
Royal Flush
Royal Flush
High Card
Straight Flush
Pair
Straight Flush
Royal Flush
Pair
High Card
High Card
Straight Flush
Flush
Full House
Two Pair
Straight
High Card
Three of a Kind
Three of a Kind
Two Pair
Four of a Kind
Royal Flush
Four of a Kind
Full House
Full House
High Card
Straight
Straight
Three of a Kind
High Card
Pair
Two Pair
High Card`]
];