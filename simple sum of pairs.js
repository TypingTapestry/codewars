function solve(n) {
    n = n.toString();
    let x = '9'.repeat(n.length - 1) * 1;
    let y = n - x;
    return ('' + x + y).split('').reduce((a, b) => +a + +b);
}