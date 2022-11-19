function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
}
  
function mergeSort(list) {
    let front = new Node();
    let back = new Node();
    if (!list || !list.next) return list;
    frontBackSplit(list, front, back);
    return sortedMerge(mergeSort(front), mergeSort(back));
}