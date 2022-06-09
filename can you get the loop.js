function loop_size(node) {
    let arr = [];
    while (!arr.includes(node)) {
      arr.push(node);
      node = node.getNext();
    } return arr.length - arr.indexOf(node);
}