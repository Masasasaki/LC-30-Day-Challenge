/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) {
        val = x;
    }
}

public class BSTfromPreorder {
    int i = 0;
    public TreeNode bstFromPreorder(int[] preorder) {
        return reversePreorder(preorder, Integer.MAX_VALUE);
    }
    
    public TreeNode reversePreorder(int[] pre, int bound) {
        if (i == pre.length || pre[i] > bound) return null;
        TreeNode root = new TreeNode(pre[i++]);
        root.left = reversePreorder(pre, root.val);
        root.right = reversePreorder(pre, bound);
        return root;
    }
}