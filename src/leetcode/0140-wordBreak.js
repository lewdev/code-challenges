const wordBreak = (s, wordDict) => {
  const trie = buildTrie(wordDict);
  console.log("trie=", trie);
  return dfs(s, trie, {});
};

/*
NOTES:

I had to look up an answer and while I was able to create a hash tree with answers, I couldn't figure out how to 
traverse it to get my answers.

I believe I optimized the solution to find whether the word exists by implementing a tree.

I understood that I needed to traverse it "depth-first-search" but I couldn't wrap my head around it.
*/

const dfs = (s, trie, map) => {
  if (map[s]) return map[s];
  let i = 1;
  const result = [];
  while (i <= s.length) {
    const word = s.substr(0, i);
    if (wordExists(trie, word)) {
      if (i === s.length) {
        result.push(word);
      }
      else {
        const nextCombos = dfs(s.substr(i), trie, map);
        nextCombos.forEach(combo => result.push(`${word} ${combo}`));
      }
    }
    i++;
  }
  map[s] = result;
  return result;
}

const buildSentence = (s, startIndex, trie, sentenceTrie) => {
  let word;
  for (let i = startIndex; i < s.length - 1; i++) {
    for (let j = 1; j <= trie.maxLen + 1; j++) {
      word = s.substr(i, j);
      if (wordExists(trie, word) && !sentenceTrie[word]) {
        sentenceTrie[word] = {};
        buildSentence(s, i + word.length - 1, trie, sentenceTrie[word]);
        // if (i === s.length - 1) reachedEnd = true;
      }
    }
  }
};

const getSentencesFromTrie = (s, sentenceTrie, answerMap) => {
  Object.keys(sentenceTrie).map(word => {
    getSentencesFromTrie(s.substr(word.length - 1), sentenceTrie[word], answerMap);
  });
};

const buildTrie = wordDict => {
  const trie = {minLen: 100, maxLen: 0};
  for (let i = 0; i < wordDict.length; i++) {
    let node = trie;
    let word = wordDict[i];
    if (word.length > trie.maxLen) trie.maxLen = word.length;
    if (word.length < trie.minLen) trie.minLen = word.length;
    for (let j = 1; j <= word.length; j++) {
      let key = word.substr(0, j);
      if (!node[key]) node[key] = {};
      node = node[key];
      if (j === word.length) node.fullWord = 1;
    }
  }
  return trie;
};

const wordExists = (trie, word) => {
  let node = trie;
  for (let i = 1; i <= word.length; i++) {
    if (!node[word.substr(0, i)]) return false;
    node = node[word.substr(0, i)];
  }
  return node.fullWord === 1;
};

const wordBreakTests = [
  [["catsanddog", ["cat","cats","and","sand","dog"]], ["cats and dog","cat sand dog"]],
  [["pineapplepenapple", ["apple","pen","applepen","pine","pineapple"]], ["pine apple pen apple","pineapple pen apple","pine applepen apple"]],
  [["catsandog", ["cats","dog","sand","and","cat"]], []],
];