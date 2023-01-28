function balancedParens(n) {
    let arr = [];
    function generate(cur, open, close) {
      if (cur.length === n * 2) arr.push(cur);
      if (open < n) generate(cur + '(', open + 1, close);
      if (open > close) generate(cur + ')', open, close + 1);
    } generate('', 0, 0);
    return arr;
}