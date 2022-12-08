function rot13(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) code = (code - 65 + 13) % 26 + 65;
      else if (code >= 97 && code <= 122) code = (code - 97 + 13) % 26 + 97;
      res += String.fromCharCode(code);
    } return res;
}