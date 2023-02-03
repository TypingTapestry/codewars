function power(list) {
    let arr = [];
    let len = list.length;
    let combos = 1 << len;
    for (let i = 0; i < combos; i++) {
      let sub = [];
      for (let x = 0; x < len; x++) if (i & (1 << x)) sub.push(list[x]);
      arr.push(sub);
    } return arr;
}