/*
class Node 
    int data;
    Node left;
    Node right;
*/
/**
 * Finds the lowest node
 */
public static Node postOrder(Node root) {
    Node cur = root;
    if(cur.left != null) {
        postOrder(cur.left);
    }
    if(cur.right != null) {
        postOrder(cur.right);
    }
    return cur;
}

public static int height(Node root) {
    int height = 0;
    Node cur = root;
    if(cur.left != null) {
        height = 1 + height(cur.left);
    }
    if(cur.right != null) {
        height = 1 + height(cur.right);
    }
    return height;
}
