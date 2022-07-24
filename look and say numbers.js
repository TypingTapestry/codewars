function lookAndSay(data, len, arr = []) {
    if (len === 0) return arr;
    let count = 1;
    let str = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i] === data[i + 1]) count++;
      else {
        str += count + data[i];
        count = 1;
      }
    } arr.push(str);
    return lookAndSay(str, len - 1, arr);
}