function permuteAPalindrome(input) {
    let set = new Set();
    for (let char of input) {
      if (set.has(char)) set.delete(char);
      else set.add(char);
    } return set.size <= 1;
}