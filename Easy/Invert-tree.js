var invertTree = function(root) {
    // Base Case
    if(!root) return null;

    return dfs(root)
};

const dfs = (root) => {
    let left = invertTree(root.left)
    let right = invertTree(root.right)

    root.left = right;
    root.right = left;

    return root;
}
