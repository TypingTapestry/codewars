function deepCount(a) {
    let count = a.length;
    for (let el of a) {
      if (Array.isArray(el)) count += deepCount(el);
    } return count;
}