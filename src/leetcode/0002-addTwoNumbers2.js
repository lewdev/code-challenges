/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const buildList = arr => {
  console.log(arr);
  let head, node = null;
  arr.forEach(a => {
    if (!node) head = node = new ListNode(a);
    else {
      node.next = new ListNode(a);
      node = node.next;
    }
  });
  return head;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers2 = (l1, l2) => {
  l1 = buildList(l1);
  l2 = buildList(l2);

  //--------------
  let l1Node = l1;
  let l2Node = l2;
  let answer, answerNode, sum, addATen = 0, num1, num2;
  while (l1Node || l2Node) {
    num1 = (l1Node ? l1Node.val : 0);
    num2 = (l2Node ? l2Node.val : 0);
    sum = num1 + num2 + addATen;

    if (sum > 9) {
      sum -= 10;
      addATen = 1;
    }
    else addATen = 0;

    if (!answerNode) answer = answerNode = new ListNode(sum);
    else {
      answerNode.next = new ListNode(sum);
      answerNode = answerNode.next;
    }

    //next nodes
    if (l1Node) l1Node = l1Node.next;
    if (l2Node) l2Node = l2Node.next;
  }
  if (addATen) answerNode.next = new ListNode(addATen);

  //return answer;
  //--------------

  let testAnswer = [];
  answerNode = answer;
  while (answerNode) {
    testAnswer.push(answerNode.val);
    answerNode = answerNode.next;
  }
  return testAnswer;
};

const addTwoNumbers2Tests = [
  [[[2,4,3], [5,6,4]], [7, 0, 8]],
  [[[9,9,9,9,9,9,9], [9,9,9,9]], [8,9,9,9,0,0,0,1]]
];
