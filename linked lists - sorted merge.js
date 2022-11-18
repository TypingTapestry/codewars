function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
}
  
function sortedMerge(first, second) {
    let arr = [];
    while (first) {
      arr.push(first.data);
      first = first.next;
    }
    while (second) {
      arr.push(second.data);
      second = second.next;
    }
    arr.sort((a, b) => a - b);
    return buildList(arr);
}