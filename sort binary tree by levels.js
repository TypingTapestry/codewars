function treeByLevels(root) {
    if (!root) return [];
    let arr = [];
    let queue = [root];
    while (queue.length > 0) {
      const current = queue.shift();
      arr.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    } return arr;
}