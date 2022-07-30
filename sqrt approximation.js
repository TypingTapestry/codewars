function sqrtApproximation(number) {
    let i = 0;
    while (i ** 2 <= number) i++;
    if ((i - 1) ** 2 === number) return i - 1;
    return [i - 1, i];
}