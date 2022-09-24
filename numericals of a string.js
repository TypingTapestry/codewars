function numericals(s) {
    let obj = {};
    let res = '';
    for (let i = 0; i < s.length; i += 1) {
      if (obj[s[i]]) obj[s[i]] += 1;
      else obj[s[i]] = 1;
      res += obj[s[i]];
    } return res;
}