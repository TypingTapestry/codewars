let findSummands = n => Array(n).fill(0).map(x => Math.pow(n, 2)).map((x, i) => x + (-(n - 1) + (i * 2)));