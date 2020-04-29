/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int val;
    public int pathSum(TreeNode node) {
        if (node == null) {
            return 0;
        }
        
        int left = pathSum(node.left);
        int right = pathSum(node.right);
        
        int max = Math.max(Math.max(left, right) + node.val, node.val);
        int maxT = Math.max(max, left + right + node.val);
        
        val = Math.max(val, maxT);
        
        return max;
    }
    public int maxPathSum(TreeNode root) {
        val = Integer.MIN_VALUE;
        pathSum(root);
        return val;
    }
}