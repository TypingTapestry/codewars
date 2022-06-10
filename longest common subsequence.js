function LCS(x, y) {
    x = x.split('');
    return y.split('').filter((sub) => {
      if (x.indexOf(sub) !== -1) {
        return x.splice(0, x.indexOf(sub) + 1);
      }
    }).join('');
}