function missingAlphabets(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let arr = [];
    let str = s.split('');
    while (str.length > 0) for (let i = 0; i < alphabet.length; i++) {
      let x = alphabet[i];
      if (str.includes(x)) {
        let y = str.indexOf(x);
        str.splice(y, 1);
      } else arr.push(x);
    } return arr.sort().join('');
}