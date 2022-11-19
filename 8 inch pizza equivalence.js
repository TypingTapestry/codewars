function howManyPizzas(n) {
    let int = n * n / 64;
    return `pizzas: ${Math.floor(int)}, slices: ${Math.round(int % 1 * 8)}`;
}