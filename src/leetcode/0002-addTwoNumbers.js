
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var add10, firstNode, currNode;
  while (true) {
    var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (add10 ? 1 : 0);
    add10 = false;
    if (sum > 9) {
      add10 = true;
      sum -= 10;
    }
    var newNode = new ListNode(sum);
    if (!currNode) {
      currNode = newNode;
      firstNode = newNode;
    }
    else {
      currNode.next = newNode;
      currNode = newNode;
    }
    l1 = l1 ? l1.next : false;
    l2 = l2 ? l2.next : false;
    if (!l1 && !l2) {
      if (add10) newNode.next = new ListNode(1);
      break;
    }
  }
  return firstNode;
};
window.onload = () => {
  //342 + 807 = 
  var l1 = new ListNode(3, new ListNode(4, new ListNode(3)));
  var l2 = new ListNode(7, new ListNode(0, new ListNode(8)));
  var result = addTwoNumbers(l1, l2);
  var node = result;
  console.log(printList(l1) + " + " + printList(l2) + " = " + printList(result));
};
const printList = node => {
  var arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  var str = "";
  for (var i = arr.length - 1; i >= 0; i--) {
    str += arr[i];
  }
  return str;
};