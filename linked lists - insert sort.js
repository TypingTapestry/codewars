function Node(data) {
    this.data = data;
    this.next = null;
}
  
function insertSort(head) {
    if (!head) return null;
    return sortedInsert(insertSort(head.next), head.data);
}