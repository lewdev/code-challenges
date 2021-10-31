const heightCode = inputs => height(createTree(inputs));

const height = root => {
  if (!root) return -1;
  const right = height(root.right);
  const left = height(root.left);
  return right > left ? right + 1 : left + 1;
};

const createTree = inputs => {
  let root;
  inputs.map(data => root = insert(root, data));
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

const heightCodeTests = [
  [[3, 5, 2, 1, 4, 6, 7], 3],
  [[3, 1, 7, 5, 4], 3],
  [[15], 0],
];

/*
//My Java Solution on HackerRank.

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
  //     int data;
  //     Node left;
  //     Node right;

  public static int height(Node root) {
    // Write your code here.
    if (root == null) return -1;
    int right = height(root.right);
    int left = height(root.left);
    return right > left ? right + 1 : left + 1;
  }

  public static Node insert(Node root, int data) {
      Scanner scan = new Scanner(System.in);
    int t = scan.nextInt();
    Node root = null;
    while(t-- > 0) {
      int data = scan.nextInt();
      root = insert(root, data);
    }
    scan.close();
    int height = height(root);
    System.out.println(height);
  }
}
*/