function arrayDiff(a, b) {
    if (a.length === 0 || b.length === 0)
      return a;
    for (let i = 0; i < a.length; i++) {
      for (let x = 0; x < b.length; x++) {
        if (a[i] === b[x]) {
          a.splice(i, 1);
          i--;
        }
      }
    } return a;
}