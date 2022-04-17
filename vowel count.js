function getCount(x) {
    var vowelsCount = 0;
    x.split('').forEach(function(y) {
      if (y == 'a' | y == 'e' | y == 'i' | y == 'o' | y == 'u') {
        vowelsCount += 1;
      }
    })
    return vowelsCount;
}