function disemvowel(x) {
    let y = ['a', 'e', 'i', 'o', 'u'];
    return x.split('').filter(function(z) {
      return y.indexOf(z.toLowerCase()) == -1;
    }).join('');
}