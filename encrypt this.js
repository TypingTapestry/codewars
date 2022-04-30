var encryptThis = function(text) {
    let arr = text.split(' ').map(x => {
      let str = x.split('');
      if (x.length === 1) {
        return x.charCodeAt(0);
      }
      str[0] = x.charCodeAt(0);
      str[1] = x[x.length - 1];
      str[x.length - 1] = x[1];
      return str.join('');
    })
    return arr.join(' ');
}