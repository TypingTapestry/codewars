function longestConsec(strArr, k) {
    let str = '';
    if (strArr.length === 0 || k <= 0 || k > strArr.length) return str;
    for (let i = 0; i < strArr.length; i++) {
      let currentStr = strArr.slice(i, i + k).join('');
      if (currentStr.length > str.length) str = currentStr;
    } return str;
}