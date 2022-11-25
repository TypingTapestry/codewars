function arrange(s) {
    let arr = [];
    for (let i = 0, x = s.length - 1; i < Math.ceil(s.length / 2); i += 2, x -= 2) {
      arr.push(s[i]);
      arr.push(s[x]);
      arr.push(s[x - 1]);
      arr.push(s[i + 1]);
    } return arr.slice(0, s.length);
}