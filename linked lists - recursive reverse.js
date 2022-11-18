function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
}
  
function reverse(head) {
    if (!head) return null;
    let node = new Node(head.data);
    while (head.next) {
      head = head.next;
      node = push(node, head.data);
    } return node;
}