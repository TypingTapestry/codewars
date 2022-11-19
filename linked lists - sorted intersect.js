function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
}
  
function sortedIntersect(first, second) {
    if (!first || !second) return null;
    let node = new Node();
    let head = node;
    while (first !== null && second !== null) {
      if (first.data === second.data) {
        if (head.data === first.data) {
          first = first.next;
          continue;
        } else {
          head.next = new Node(second.data);
          head = head.next;
          first = first.next;
          continue;
        }
      }
      if (first.data > second.data) {
        second = second.next;
        continue;
      }
      if (first.data < second.data) {
        first = first.next;
        continue;
      }
    } return node.next;
}