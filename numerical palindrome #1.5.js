function palindrome(num, s) {
    let arr = [];
    if (num !== +num || s !== +s || num < 0 || s < 0) return 'Not valid';
    for (let n = Math.max(10, num); arr.length < s; n++) if (n == (n + '').split('').reverse().join('')) arr.push(n);
    return arr;
}