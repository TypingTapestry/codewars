function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
}
  
function reverse(list) {
    let arr = [];
    let head = list;
    if (!list) return null;
    while (head) {
      arr.push(head.data);
      head = head.next;
    }
    head = list;
    while (head) {
      head.data = arr.pop();
      head = head.next;
    } return list;
}