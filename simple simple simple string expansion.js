function stringExpansion(s) {
    let str = '';
    let num = 1;
    for (let i = 0; i < s.length; i++) {
      if (s[i] >= '0' && s[i] <= '9') num =+ s[i];
      else for (let x = 0; x < num; x++) str += s[i];
    } return str;
}