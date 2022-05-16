function narcissistic(value) {
    let str = value.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Math.pow(str[i], str.length);
    }
    if (sum === value) {
      return true;
    } else return false;
}