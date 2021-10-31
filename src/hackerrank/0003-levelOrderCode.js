const levelOrderCode = inputs => levelOrder(createTree(inputs));

const levelOrder = root => {
  const list = [root];
  let node, output = [];
  while (list.length > 0) {
    node = list.pop();
    if (node.left) list.unshift(node.left);
    if (node.right) list.unshift(node.right);
    output.push(node.data);
  }
  return output.join(" ");
};

const levelOrderCodeTests = [
  [[1, 2, 5, 3, 6, 4], "1 2 5 3 6 4"],
];

//---------------------------------------------------
// Hacker Rank Tree Code (converted to JS)
//---------------------------------------------------
const createTree = inputs => {
  let root;
  inputs.forEach(data => root = insert(root, data));
  return root;
};

const insert = (root, data) => {
  if (!root) return {data};
  let cur;
  if (data <= root.data) {
    cur = insert(root.left, data);
    root.left = cur;
  }
  else {
    cur = insert(root.right, data);
    root.right = cur;
  }
  return root;
};
//---------------------------------------------------

/*
import java.util.*;
import java.io.*;

class Node {
    Node left;
    Node right;
    int data;
    
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}

class Solution {
  // class Node 
  //   int data;
  //   Node left;
  //   Node right;

  public static void levelOrder(Node root) {
    LinkedList<Node> list = new LinkedList<>();
    list.add(root);
    while (!list.isEmpty()) {
      if (list.peek().left != null) list.add(list.peek().left);
      if (list.peek().right != null) list.add(list.peek().right);
      System.out.print(list.poll().data + " ");
    }
  }

  public static Node insert(Node root, int data) {
    if(root == null) {
      return new Node(data);
    } else {
      Node cur;
      if(data <= root.data) {
        cur = insert(root.left, data);
        root.left = cur;
      } else {
        cur = insert(root.right, data);
        root.right = cur;
      }
      return root;
    }
  }

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int t = scan.nextInt();
    Node root = null;
    while(t-- > 0) {
      int data = scan.nextInt();
      root = insert(root, data);
    }
    scan.close();
    levelOrder(root);
  }
}
 */