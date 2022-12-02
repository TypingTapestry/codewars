function primeString(s) {
    for (let i = 1; i <= s.length / 2; i++) {
      let arr = s.split(s.substring(0, i));
      if (arr.join('') === '') return false;
    } return true;
}