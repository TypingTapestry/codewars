function hamming(n) {
    let heap = [1];
    let two = 0;
    let three = 0;
    let five = 0;
    for (let i = 1; i < n; i++) {
      let next = Math.min(heap[two] * 2, heap[three] * 3, heap[five] * 5);
      heap.push(next);
      if (next === heap[two] * 2) two++;
      if (next === heap[three] * 3) three++;
      if (next === heap[five] * 5) five++;
    } return heap[n - 1];
}