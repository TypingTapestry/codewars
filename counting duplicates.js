function duplicateCount(text) {
    let count = 0;
    let x = '';
    let str = text.toLowerCase().split('').sort().join('');
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1] && str[i] !== x) {
        x = str[i];
        count++;
        i++;
      }
    } return count;
}