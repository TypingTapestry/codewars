function Node(data, next = null) {
    this.data = data;
    this.next = next;
}
  
function sortedInsert(head, data) {
    if (head === null) return new Node(data);
    if (head.data > data) return new Node(data, head);
    else return new Node(head.data, sortedInsert(head.next, data));
}