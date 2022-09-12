function parse(str) {
    return str.split(' -> ').reverse().map(x => JSON.parse(x)).reduce((a, b) => new Node(b, a));
}