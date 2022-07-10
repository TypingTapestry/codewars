function removeParentheses(s) {
    let result = '';
    let count = 0;
    for (let char of s) {
      if (char === '(') count += 1;
      if (count === 0) result += char;
      if (char === ')') count -= 1;
    } return result;
}