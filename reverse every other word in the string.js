function reverse(string) {
    let str = string.split(' ');
    for (let i = 1; i < str.length; i += 2) str[i] = str[i].split('').reverse().join('');
    if (str.join(' ') === '   ') return '';
    return str.join(' ');
}