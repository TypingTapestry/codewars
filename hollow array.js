function isHollow(x) {
    let y = x.indexOf(0);
    if (x.indexOf(0) === -1) return false;
    if (x[y + 1] !== 0 || x[y + 2] !== 0) return false;
    let a = x.slice(0, x.indexOf(0));
    let b = x.slice(x.lastIndexOf(0) + 1, x.length);
    return a.length === b.length;
}