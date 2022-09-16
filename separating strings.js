function sepStr(string) {
    let arr = [];
    let str = string.split(' ');
    let max = Math.max(...str.map(x => x.length));
    for (let i = 0; i < max; i++) arr.push(str.map(x => x[i] || ''));
    return arr;
}