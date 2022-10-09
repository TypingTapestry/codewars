function dup(s) {
    let arr = [];
    for (let key of s) {
      let str = '';
      for (let i = 0; i < key.length; i++) if (key[i] !== key[i - 1]) str += key[i];
      arr.push(str);
    } return arr;
}