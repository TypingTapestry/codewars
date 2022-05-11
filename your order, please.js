function order(words) {
    let word = words.split(' ');
    let arr = [];
    for (let i = 0; i <= word.length; i++) {
      for (let x = 0; x < word.length; x++) {
        if (word[x].indexOf(i) >= 0) {
          arr.push(word[x]);
        }
      }
    } return arr.join(' ');
}