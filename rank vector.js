function ranks(a) {
    let arr = [];
    let res = '';
    for (let i = 0; i < a.length; i++) {
      let rank = a[i];
      res = 0;
      for (let x = 0; x < a.length; x++) if (a[x] > rank) res++;
      arr.push(res + 1);
    } return arr;
}