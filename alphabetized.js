function alphabetized(s) {
    let str = '';
    for (let i = 97; i < 123; i++) {
      for (let x = 0; x < s.length; x++) {
        if (s[x].toLowerCase().charCodeAt() === i) str += s[x];
      }
    } return str;
}