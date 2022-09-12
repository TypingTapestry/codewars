function stringParse(string) {
    if (string + '' !== string) return 'Please enter a valid string';
    let str = string.split('');
    for (let i = 2; i < str.length; i++) if (str[i] === str[i - 1] && str[i] === str[i - 2]) {
      let x = i;
      while (str[x] === str[x + 1]) x++;
      str.splice(i, 0, '[');
      str.splice(x + 2, 0, ']');
      i = x + 1;
    } return str.join('');
}