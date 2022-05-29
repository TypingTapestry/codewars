function ipsBetween(start, end) {
    let num = ip => ip.split('.').map(x => Number(x)).reduce((acc, cur) => acc * 256 + cur);
    return num(end) - num(start);
}