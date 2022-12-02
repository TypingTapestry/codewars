function lookAndSaySequence(firstElement, n) {
    let seq = n - 1;
    while (seq !== 0) {
      let arr = [];
      let count = 0;
      let charArr = firstElement.split('');
      for (let i = 0; i < charArr.length; i++) {
        count++;
        if (charArr[i + 1] !== charArr[i]) {
          arr.push(count + charArr[i]);
          count = 0;
        }
      }
      firstElement = arr.join('');
      seq--;
    } return firstElement;
}