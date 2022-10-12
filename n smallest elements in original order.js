function firstNSmallest(array, n) {
    return array
      .map((num, idx) => ({num, idx}))
      .sort((a, b) => a.num - b.num || a.idx - b.idx)
      .slice(0, n)
      .sort((a, b) => a.idx - b.idx)
      .map(c => c.num);
}