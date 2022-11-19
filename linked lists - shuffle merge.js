function Node(data = null, next = null) {
    this.data = data;
    this.next = next;
}
  
function shuffleMerge(first, second) {
    if (!first) return second;
    if (!second) return first;
    return new Node(first.data, shuffleMerge(second, first.next));
}