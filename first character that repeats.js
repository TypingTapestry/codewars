function firstDup(s) {
    for (let i = 0; i < s.length; i++) {
      for (let x = 1 + i; x < s.length; x++) if (s[i] === s[x]) return s[i];
    }
}