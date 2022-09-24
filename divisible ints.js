function getCount(n) {
    let str = n.toString();
    let num = 0;
    for (let i = 1; i < str.length; i++) for (let x = 0; x <= str.length - i; x++) num += n % Number(str.slice(x, x + i)) === 0;
    return num;
}