function insertAtIndexes(phrase, word, indexes) {
    let count = 0;
    for (let i = 0; i < indexes.length; i++) {
      phrase = phrase.slice(0, indexes[i] + count) + word + phrase.slice(indexes[i] + count);
      count += word.length;
    } return phrase;
}