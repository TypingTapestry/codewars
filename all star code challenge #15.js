function rotate(string) {
    let arr = [];
    let str = string;
    for (let i = 0; i < string.length; i++) {
      str = str.slice(1) + str[0];
      arr.push(str);
    } return arr;
}