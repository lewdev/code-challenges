const DEPTH = 10;
const contacts = queries => {
  const searchResults = [];
  const tree = {};
  queries.forEach(query => {
    let operation = query[0];
    let input = query[1];
    switch (operation) {
      case "add": addToContactTree(tree, input); break;
      case "find": searchResults.push(contactResults(tree, input)); break;
    }
  });
  return searchResults;
};

const addToContactTree = (tree, input) => {
  let node = tree;
  for (let i = 1; i < Math.min(input.length, DEPTH) + 1; i++) {
    if (!node[input.substr(0, i)]) node[input.substr(0, i)] = {count: 0};
    node = node[input.substr(0, i)];
    node.count++;
  }
  if (input.length >= DEPTH) {
    if (!node.contacts) node.contacts = [];
    node.contacts.push(input);
  }
};

const contactResults = (tree, input) => {
  let node = tree;
  for (let i = 1; i < Math.min(input.length, DEPTH) + 1; i++) {
    if (!node[input.substr(0, i)]) return 0;
    node = node[input.substr(0, i)];
  }
  // console.log("contactResults 2", input, tree);
  if (input.length >= DEPTH && node.contacts) return node.contacts.filter(c => c.startsWith(input)).length;
  return node.count;
};

const contactsTests = [
  [
    [["add", "hack"], ["add", "hackerrank1"], ["add", "hackerrank1"], ["add", "hackerrank133332asdffsdadafs"], ["add", "hackerrank133332asdffs2"], ["find", "hac"], ["find", "hak"], ["find", "hackerrank"]],
    [5, 0, 4]
  ],
  [
    [["add", "asdfhack"], ["add", "asdfhackerrank"], ["add", "as"], ["find", "asdf"], ["find", "as"]],
    [2, 3]
  ],
]