function spinWords(string) {
    let str = string.split(' ');
    for (let i = 0; i < str.length; i++) {
      if (str[i].length >= 5) {
        str[i] = str[i].split('').reverse().join('');
      }
    } return str.join(' ');
}