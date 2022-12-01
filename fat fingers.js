let fatFingers = str => {
    let count = 0;
    let res = '';
    if (!str) return str;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === 'a') {
        if (count === 0) count = 1;
        else count = 0;
      } else {
        if (count === 0) res += str[i];
        if (count === 1) {
          if (str[i] === str[i].toLowerCase()) res += str[i].toUpperCase();
          else if (str[i] === str[i].toUpperCase()) res += str[i].toLowerCase();
        }
      }
    } return res;
}