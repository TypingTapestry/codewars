function swap(s, n) {
    let bin = n.toString(2).split('');
    let res = '';
    let i = 0;
    for (let char of s) {
      if (char.toLowerCase() !== char.toUpperCase()) {
        if (bin[i] === '1') char = char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
        res += char;
        i = i < bin.length - 1 ? ++i : 0;
      } else res += char;
    } return res;
}