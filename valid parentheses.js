function validParentheses(parens) {
    let p = 0;
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === '(') p++;
      if (parens[i] === ')') p--;
      if (p < 0) return false;
    } return p === 0;
}