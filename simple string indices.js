function solve(str, idx) {
    let count = 1;
    if (str[idx] !== '(') return -1;
    for (let i = idx + 1; i <= str.length; i++) {
      if (str[i] === '(') count++;
      if (str[i] === ')') count--;
      if (!count) return i;
    }
}