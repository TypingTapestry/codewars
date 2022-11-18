function reduce(head, f, init) {
    let arr = [];
    while (head) {
      arr.push(head.data);
      head = head.next;
    } return arr.reduce(f, init);
}