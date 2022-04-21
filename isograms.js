function isIsogram(str) {
    str = str.toLowerCase();
    for (x = 0; x < str.length - 1; x++) {
      for (y = x + 1; y < str.length; y++) {
        if (str[x] === str[y]) {
          return false;
        }
      }
    } return true;
}