function getMiddle(s) {
    let midIndex = s.length / 2;
    if (s.length % 2 === 0) {
      return s.slice(midIndex - 1, midIndex + 1);
    } else return s.charAt(midIndex);
}