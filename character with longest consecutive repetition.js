function longestRepetition(s) {
    let char = '';
    let max = 0;
    for (let i = 0; i < s.length; i++) {
      let count = 0;
      for (let x = i; x < s.length; x++) {
        if (s[i] === s[x]) count++;
        else break;
      }
      if (count > max) {
        char = s[i];
        max = count;
      }
    } return [char, max];
}