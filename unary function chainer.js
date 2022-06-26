function chained(functions) {
    return input => functions.reduce((a, b) => b(a), input);
}