// 从上到下按层打印二叉树，
// 同一层的节点按从左到右的顺序打印，
// 每一层打印到一行。

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    /*  实现BFS 构造队列queue实现 */
    if (!root) return []

    const queue = [[root, 0]], res = []

    while (queue.length) {
        const [node, level] = queue.shift()

        // 判断当前层是否已经初始化设置 [] 若无则初始化一下
        if (!res[level]) res[level] = []
        res[level].push(node.val)

        node.left && queue.push([node.left, level + 1])
        node.right && queue.push([ node.right, level + 1 ])
    }

    return res
};
