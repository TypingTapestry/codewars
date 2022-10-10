function common(a, b, c) {
    let arr = [];
    for (let i = 0; i < a.length; i++) if (b.includes(a[i]) && c.includes(a[i])) {
      b.splice(b.indexOf(a[i]), 1);
      c.splice(c.indexOf(a[i]), 1);
      arr.push(a[i]);
    } return arr.reduce((a, b) => a + b, 0);
}