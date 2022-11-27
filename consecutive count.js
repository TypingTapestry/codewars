function getConsectiveItems(items, key) {
    let curr = 0;
    let max = 0;
    let str = items.toString();
    for (let i = 0; i < str.length; i++) {
      if (str[i] === key.toString()) curr++;
      else {
        max = curr > max ? curr : max;
        curr = 0;
      }
    } max = curr > max ? curr : max;
    return max;
}