function remember(str) {
    let set = [];
    let res = [];
    for (let i = 0; i < str.length; i++) {
      if (set.indexOf(str[i]) === -1) set.push(str[i]);
      else if (res.indexOf(str[i]) === -1) res.push(str[i]);
    } return res;
}