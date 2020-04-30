class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class BTSequence {
    public boolean isValidSequence(TreeNode root, int[] arr) {
        return dfs(root, 0, arr);
    }

    public boolean dfs(TreeNode node, int i, int[] arr) {
        if (node == null || i == arr.length) {
            return false;
        }
        
        if (i == arr.length - 1 && node.val == arr[i] && node.left == null && node.right == null) {
            return true;
        }
        
        if (node.val == arr[i]) {
            return dfs(node.left, i+1, arr) || dfs(node.right, i+1, arr);
        }
        
        return false;
    }
}