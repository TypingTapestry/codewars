let runLengthEncoding = function(str) {
    let arr = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) count++;
      else {
        arr.push([count, str[i]]);
        count = 1;
      }
    } return arr;
}