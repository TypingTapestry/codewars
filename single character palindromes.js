function solve(s) {
    if (s === s.split('').reverse().join('')) return 'OK';
    for (let i = 0; i < s.length; i++) {
      let arr = s.split('');
      arr.splice(i, 1);
      if (arr.join('') === arr.reverse().join('')) return 'remove one';
    } return 'not possible';
}