function computeDepth(x) {
    let set = new Set();
    for (let i = 1; set.size < 10; i++) {
      String(i * x).split('').forEach(el => set.add(el++));
      if (set.size === 10) return i;
    }
}