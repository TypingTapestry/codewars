function moreZeros(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
      let bin = s[i].charCodeAt().toString(2);
      let zero = 0;
      let one = 0;
      for (let x = 0; x < bin.length; x++) {
        if (bin[x] === '0') zero++;
        else one++;
      }
      if (arr.indexOf(s[i]) === -1 && zero > one) arr.push(s[i]);
    } return arr;
}