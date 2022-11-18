function stringBreakers(n, str) {
    let arr = [];
    str = str.replace(/\s/g, '');
    for (let i = 0; i < str.length; i += n) arr.push(str.substr(i, n));
    return arr.join('\n');
}