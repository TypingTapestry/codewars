function fakeBin(x) {
    let y = '';
    for (let i = 0; i < x.length; i++) {
      if (x[i] >= 5) {
        y += '1';
      } else y += '0';
    } return y;
}