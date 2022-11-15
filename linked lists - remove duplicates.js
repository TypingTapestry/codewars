function Node(data) {
    this.data = data;
    this.next = null;
}
  
function removeDuplicates(head) {
    let curr = head;
    if (head === null) return null;
    while (curr && curr.next) {
      if (curr.data === curr.next.data) {
        if (curr.next.next) curr.next = curr.next.next;
        else curr.next = null;
      } else curr = curr.next;
    } return head;
}