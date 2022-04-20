function findShort(s) {
    return s.split(' ').map(x => x.length).reduce((x, y) => Math.min(x, y));
}