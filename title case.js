function titleCase(title, minorWords) {
    let arr = minorWords ? minorWords.toLowerCase().split(' ') : [];
    return title.toLowerCase().split(' ').map((word, idx) => {
      if (!word) return word;
      if (arr.indexOf(word) !== -1 && idx !== 0) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}