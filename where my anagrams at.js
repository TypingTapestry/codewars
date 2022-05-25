function anagrams(word, words) {
    let arr = [];
    let wordSort = word.split('').sort().join('');
    for (let i = 0; i < words.length; i++) {
      if (wordSort === words[i].split('').sort().join('')) {
        arr.push(words[i]);
      }
    } return arr;
}