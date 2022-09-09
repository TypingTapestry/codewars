function playPass(s, n) {
    return s.split('').map((val, idx) => {
      let code = val.charCodeAt(0);
      if (code > 0x40 && code <= 0x5A) {
        if (code + n > 0x5A) code = code + n - 0x5A + 0x40;
        else code = code + n;
        return String.fromCharCode(code + (idx % 2 === 1 ? 0x20 : 0));
      } else if (code >= 0x30 && code < 0x3A) return 9 - val;
      else return val;
    }).reverse().join('');
}