function Node(data) {
    this.data = data;
    this.next = null;
}
  
function Context(first, second) {
    this.first = first;
    this.second = second;
}
  
function alternatingSplit(head) {
    if (!head || !head.next) throw new Error();
    let arr = [head, head.next];
    let context = new Context(...arr);
    for (let i = 0, x = 1; arr[x]; [i, x] = [x, i]) arr[i] = arr[i].next = arr[x].next;
    return context;
}