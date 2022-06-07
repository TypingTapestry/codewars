function makeLooper(string) {
    let str = string.toString();
    let i = 0;
    return function() {
      i %= str.length;
      return str[i++];
    }
}