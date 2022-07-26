function findSquares(x, y) {
    let num = 0;
    while (x && y) num += x-- * y--;
    return num;
}