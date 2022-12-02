function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
  
function insertNth(head, index, data) {
    if (index === 0) return new Node(data, head);
    return new Node(head.data, insertNth(head.next, index - 1, data));
    throw new Error();
}