function whitespaceNumber(n) {
    let res = '';
    if (n === 0) return ' \n';
    for (let num of n.toString(2).split('')) {
      if (num === '-') continue;
      res += num === '1' ? '\t' : ' ';
    } return `${n > 0 ? ' ' : '\t'}${res}\n`;
}