/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let sol
const diameterOfBinaryTree = root => {
    this.sol = 1
    DFS(root)
    return this.sol - 1
}

const DFS = node => {
    if (node === null) return 0
    let left = DFS(node.left)
    let right = DFS(node.right)
    this.sol = Math.max(this.sol, left + right + 1)
    return Math.max(left, right) + 1
}