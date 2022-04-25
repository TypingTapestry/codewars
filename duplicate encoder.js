function duplicateEncode(word) {
    let str = word.toLowerCase();
    let x = '';
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        x += '(';      
      } else x += ')';
    } return x;
}