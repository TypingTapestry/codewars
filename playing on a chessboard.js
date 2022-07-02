function game(n) {
    let area = (n ** 2) / 2;
    if (n === 0) return [0];
    if (String(area).includes('.')) return [area * 2, 2];
    else return [area];
}