/* you only have to complete the function given below.  
Node is defined as  

class Node {
    int data;
    Node left;
    Node right;
}

*/

public static void inOrder(Node root) {
    Node cur = root;
    if(cur.left != null) {
        inOrder(cur.left);
    }
    System.out.print(cur.data + " ");
    if(cur.right != null) {
        inOrder(cur.right);
    }
}
