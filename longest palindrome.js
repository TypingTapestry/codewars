let longestPalindrome = s => {
    for (let x = s.length; x > 0; x--) {
      for (let i = 0; i <= s.length - x; i++) {
        if (s.substr(i, x)[0] === s.substr(i, x)[x - 1])
        if (s.substr(i, x) === [...s.substr(i, x)].reverse().join('')) return x;
      }
    } return 0;
}