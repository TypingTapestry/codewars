function uniqueInOrder(iterable) {
    let arr = [];
    let previous = 0;
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== previous) {
        arr.push(previous = iterable[i]);
      }
    } return arr;
}