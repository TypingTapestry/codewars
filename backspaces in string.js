function cleanString(str) {
    let arr = [];
    for (let char of str) {
      if (char === '#') arr.pop();
      else arr.push(char);
    } return arr.join('');
}