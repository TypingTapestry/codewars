function treeToArray(tree) {
    let arr = [];
    let nodes = [tree];
    if (tree.length === 0) return [];
    while (nodes.length > 0) {
      let node = nodes.shift();
      arr.push(node.data);
      for (let child of node.children) nodes.push(child);
    } return arr;
}