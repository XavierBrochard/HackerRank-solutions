

/* you only have to complete the function given below.  
Node is defined as  

class Node {
    int data;
    Node left;
    Node right;
}

*/
 
public static void postOrder(Node root) {
    Node cur = root;
    if(cur.left != null) {
        postOrder(cur.left);
    } 
    if(cur.right != null) {
        postOrder(cur.right);
    }
    System.out.print(cur.data + " ");
}
 