function wave(string) {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
      let str = string.split('');
      if (str[i] !== ' ') {
        str[i] = str[i].toUpperCase();
        arr.push(str.join(''));
      }
    } return arr;
}