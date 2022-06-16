function count(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
      if (charCount.hasOwnProperty(str[i])) charCount[str[i]] += 1;
      else charCount[str[i]] = 1;
    } return charCount;
}