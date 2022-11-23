function oddOneOut(str) {
    let arr = [];
    let obj = {};
    for (let i = 0; i < str.length; i++) obj[str[i]] = obj[str[i]] + 1 || 1;
    for (let i = str.length - 1; i >= 0; i--) if (obj[str[i]] % 2 !== 0) {
      arr.push(str[i]);
      obj[str[i]]--;
    } return arr.reverse();
}