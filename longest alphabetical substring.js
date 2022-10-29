function longest(str) {
    let sub = str[0];
    let cur = str[0];
    let len = str.length;
    for (let i = 1; i < len; i++) {
      str[i] >= str[i - 1] ? cur += str[i] : cur = str[i];
      if (sub.length < cur.length) sub = cur;
    } return sub;
}