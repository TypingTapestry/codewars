function arrayToTree(arr, i = 0) {
    if (i >= arr.length) return;
    return new TreeNode(arr[i], arrayToTree(arr, i * 2 + 1), arrayToTree(arr, i * 2 + 2));
}