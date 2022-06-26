function sumConsecutives(s) {
    let arr = [];
    let i = 0;
    while (i < s.length) {
      let sum = s[i];
      while (s[i] === s[i + 1]) {
        i += 1;
        sum += s[i];
      }
      arr.push(sum);
      i += 1;
    } return arr;
}